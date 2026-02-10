# Configuración de Google OAuth en Supabase

Para que la autenticación con Google funcione, necesitas configurar el proveedor OAuth en tu proyecto de Supabase.

## Pasos para configurar Google OAuth:

### 1. Configurar Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a "APIs & Services" > "Credentials"
4. Haz clic en "Create Credentials" > "OAuth 2.0 Client ID"
5. Configura la pantalla de consentimiento si aún no lo has hecho
6. Selecciona "Web application" como tipo de aplicación
7. Agrega las siguientes URLs autorizadas:
   - **Authorized JavaScript origins**: 
     - `http://localhost:5173` (para desarrollo)
     - Tu dominio de producción cuando lo tengas
   - **Authorized redirect URIs**:
     - `https://ovwufkzgxrhmtspnnfou.supabase.co/auth/v1/callback`
     - `http://localhost:5173` (para desarrollo)

### 2. Configurar Supabase

1. Ve a tu proyecto en [Supabase Dashboard](https://app.supabase.com/)
2. Ve a "Authentication" > "Providers"
3. Busca "Google" en la lista de proveedores
4. Habilita el proveedor de Google
5. Ingresa tu **Client ID** y **Client Secret** de Google
6. Guarda los cambios

### 3. Configurar URLs de redirección

En Supabase Dashboard:
1. Ve a "Authentication" > "URL Configuration"
2. Agrega las siguientes URLs:
   - **Site URL**: `http://localhost:5173` (para desarrollo)
   - **Redirect URLs**: 
     - `http://localhost:5173/prompts`
     - Tu URL de producción cuando la tengas

## Verificación

Una vez configurado:
1. Reinicia el servidor de desarrollo si es necesario
2. Ve a `http://localhost:5173/#/login`
3. Haz clic en "continuar con Google"
4. Deberías ser redirigido a la página de autenticación de Google
5. Después de autenticarte, serás redirigido a `/prompts`

## Notas importantes

- La aplicación usa BrowserRouter (URLs limpias sin `#`)
- El redirect URL debe ser: `http://localhost:5173/prompts`
- Los usuarios autenticados no podrán ver `/prompts` sin iniciar sesión
- El estado de autenticación se mantiene en el navegador
