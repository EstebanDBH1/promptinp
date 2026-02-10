# 🔍 Diagnóstico de Problemas de Autenticación

He agregado logging detallado y una página de debug para ayudarte a identificar el problema.

## Pasos para Diagnosticar:

### 1. Abre la Consola del Navegador
- Presiona `F12` o `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- Ve a la pestaña "Console"

### 2. Ve a la Página de Debug
- Navega a: `http://localhost:5173/debug-auth`
- Esta página te mostrará:
  - Estado del contexto de autenticación
  - Datos de sesión directos de Supabase
  - Variables de entorno
  - URL actual

### 3. Intenta Hacer Login
1. Ve a `http://localhost:5173/login`
2. Haz clic en "continuar con Google"
3. **Observa los logs en la consola** - deberías ver:
   - 🔐 Starting Google sign in...
   - 🔐 Auth state change: { event: 'SIGNED_IN', ... }
   - 🔐 LoginPage - user state: { user: 'tu-email@gmail.com', ... }
   - 🔐 LoginPage - Redirecting to /prompts

### 4. Después del Login
- Después de autenticarte con Google, serás redirigido de vuelta
- **Observa la URL** - debería ser algo como:
  - `http://localhost:5173/prompts` (si todo funciona)
  - `http://localhost:5173/#access_token=...` (si hay un problema con el callback)

### 5. Revisa la Página de Debug
- Ve nuevamente a `http://localhost:5173/debug-auth`
- Revisa si:
  - `User` muestra tu email
  - `Session` dice "exists"
  - Las variables de entorno están configuradas

## Problemas Comunes y Soluciones:

### Problema 1: Variables de Entorno No Cargadas
**Síntoma:** En `/debug-auth` ves "NOT SET" en las variables de entorno

**Solución:**
1. Asegúrate de que `.env.local` existe en la raíz del proyecto
2. **IMPORTANTE:** Reinicia el servidor de desarrollo:
   ```bash
   # Detén el servidor (Ctrl+C)
   npm run dev
   ```
3. Las variables de entorno solo se cargan al iniciar Vite

### Problema 2: Redirect URL Incorrecta en Supabase
**Síntoma:** Después de login con Google, la URL no es `http://localhost:5173/prompts`

**Solución:**
1. Ve a Supabase Dashboard → Authentication → URL Configuration
2. Agrega estas URLs a "Redirect URLs":
   - `http://localhost:5173/prompts`
   - `http://localhost:5173/`
3. Asegúrate de NO incluir el `#` ahora que usamos BrowserRouter

### Problema 3: Google OAuth No Configurado
**Síntoma:** Error al hacer clic en "continuar con Google"

**Solución:**
1. Sigue las instrucciones en `GOOGLE_OAUTH_SETUP.md`
2. Configura Google Cloud Console
3. Habilita el proveedor de Google en Supabase

### Problema 4: Session No Persiste
**Síntoma:** El usuario se autentica pero luego vuelve a `/login`

**Solución:**
1. Verifica que las cookies estén habilitadas en tu navegador
2. Revisa la consola para ver si hay errores de CORS
3. Asegúrate de que la URL de Supabase sea correcta en `.env.local`

## Logs que Deberías Ver (Flujo Normal):

```
🔐 Initial session check: { session: false, user: undefined, error: null }
🔐 Starting Google sign in...
[Redirección a Google...]
[Autenticación en Google...]
[Redirección de vuelta...]
🔐 Auth state change: { event: 'SIGNED_IN', session: true, user: 'tu-email@gmail.com' }
🔐 LoginPage - user state: { user: 'tu-email@gmail.com', authLoading: false }
🔐 LoginPage - Redirecting to /prompts
🔐 ProtectedRoute - Auth state: { user: 'tu-email@gmail.com', loading: false }
🔐 ProtectedRoute - User authenticated, rendering children
```

## Información Adicional a Compartir:

Si el problema persiste, comparte:
1. Los logs de la consola (copia todo lo que empiece con 🔐)
2. La información de `/debug-auth`
3. La URL completa después de hacer login con Google
4. Cualquier error que aparezca en rojo en la consola

## Verificación Rápida:

Ejecuta esto en la consola del navegador:
```javascript
console.log('ENV:', {
  url: import.meta.env.VITE_SUPABASE_URL,
  key: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'SET' : 'NOT SET'
});
```

Si ves "NOT SET", **reinicia el servidor de desarrollo**.
