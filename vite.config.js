// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
    plugins: [reactRefresh()],
    build: {
      emptyOutDir: true, // Limpa o diretório de saída antes de construir
      rollupOptions: {
        input: {
          // Especifique o ponto de entrada dos seus componentes
          main: 'src/components/index.js',
        },
        // Certifique-se de ajustar a saída conforme necessário
        output: {
          format: 'esm', // Formato de saída: ESM, CJS, UMD, etc.
        },
      },
    },
};