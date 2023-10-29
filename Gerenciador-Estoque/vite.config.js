import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
  
  server: {
    port: 3000, // Porta para o servidor de desenvolvimento
    open: true, // Abre o navegador automaticamente
  },

  // Configuração de importação dinâmica (Dynamic Imports)
  // Isso permite dividir o código em pacotes menores
  // para carregamento mais rápido.
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },

  // Configurações de minificação e otimização
  build: {
    minify: 'terser', // Minificar o código com Terser
    rollupOptions: {
      // Configurações adicionais do Rollup (se necessário)
    },
  },

  // Outras configurações, como aliases, plugins, etc.
  // Consulte a documentação do Vite para mais opções.

  // Exemplo de configuração de alias (mapeamento de diretórios)
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})

