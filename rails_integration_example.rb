# Exemplo de integração do menu com Ruby on Rails
# Este arquivo mostra como integrar o menu de duas colunas em uma aplicação Rails

# 1. Adicionar no layout principal (app/views/layouts/application.html.erb)
# <%= content_for :head do %>
#   <%= stylesheet_link_tag 'menu' %>
#   <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
# <% end %>

# <%= content_for :javascript do %>
#   <%= javascript_include_tag 'menu' %>
# <% end %>

# 2. Helper para gerar dados do menu (app/helpers/menu_helper.rb)
module MenuHelper
  def menu_data
    [
      {
        id: 'dashboard',
        icon: 'fas fa-tachometer-alt',
        title: 'Dashboard',
        description: 'Visão geral e métricas principais do sistema',
        children: [
          {
            id: 'analytics',
            icon: 'fas fa-chart-line',
            title: 'Analytics',
            description: 'Relatórios e análises detalhadas',
            url: dashboard_analytics_path
          },
          {
            id: 'reports',
            icon: 'fas fa-file-alt',
            title: 'Relatórios',
            description: 'Geração e visualização de relatórios',
            url: dashboard_reports_path
          }
        ]
      },
      {
        id: 'users',
        icon: 'fas fa-users',
        title: 'Usuários',
        description: 'Gerenciamento de usuários e permissões',
        children: [
          {
            id: 'user-list',
            icon: 'fas fa-list',
            title: 'Lista de Usuários',
            description: 'Visualizar e gerenciar todos os usuários',
            url: users_path
          },
          {
            id: 'user-create',
            icon: 'fas fa-user-plus',
            title: 'Novo Usuário',
            description: 'Criar novo usuário no sistema',
            url: new_user_path
          }
        ]
      }
      # Adicionar mais itens conforme necessário
    ]
  end

  def render_menu_data_json
    menu_data.to_json.html_safe
  end
end

# 3. Controller para fornecer dados do menu via AJAX (app/controllers/menu_controller.rb)
class MenuController < ApplicationController
  def data
    render json: menu_data
  end

  private

  def menu_data
    # Aqui você pode personalizar os dados do menu baseado no usuário atual
    # Por exemplo, filtrar itens baseado em permissões
    base_menu = [
      {
        id: 'dashboard',
        icon: 'fas fa-tachometer-alt',
        title: 'Dashboard',
        description: 'Visão geral e métricas principais do sistema',
        children: dashboard_menu_items
      }
    ]

    # Adicionar itens baseado em permissões do usuário
    base_menu << users_menu_item if can?(:manage, User)
    base_menu << products_menu_item if can?(:manage, Product)
    
    base_menu
  end

  def dashboard_menu_items
    [
      {
        id: 'analytics',
        icon: 'fas fa-chart-line',
        title: 'Analytics',
        description: 'Relatórios e análises detalhadas',
        url: dashboard_analytics_path
      }
    ]
  end

  def users_menu_item
    {
      id: 'users',
      icon: 'fas fa-users',
      title: 'Usuários',
      description: 'Gerenciamento de usuários e permissões',
      children: [
        {
          id: 'user-list',
          icon: 'fas fa-list',
          title: 'Lista de Usuários',
          description: 'Visualizar e gerenciar todos os usuários',
          url: users_path
        },
        {
          id: 'user-create',
          icon: 'fas fa-user-plus',
          title: 'Novo Usuário',
          description: 'Criar novo usuário no sistema',
          url: new_user_path
        }
      ]
    }
  end
end

# 4. Rotas (config/routes.rb)
# Rails.application.routes.draw do
#   get 'menu/data', to: 'menu#data'
#   # outras rotas...
# end

# 5. Inicialização do menu com dados do Rails (no final do arquivo JavaScript)
# document.addEventListener('DOMContentLoaded', () => {
#   // Buscar dados do menu do servidor
#   fetch('/menu/data')
#     .then(response => response.json())
#     .then(data => {
#       window.twoColumnMenu = new TwoColumnMenu();
#       window.twoColumnMenu.updateMenuData(data);
#     })
#     .catch(error => {
#       console.error('Erro ao carregar dados do menu:', error);
#       // Fallback para dados estáticos
#       window.twoColumnMenu = new TwoColumnMenu();
#     });
# });

# 6. Exemplo de uso em uma view (app/views/shared/_menu.html.erb)
# <button id="openMenuBtn" class="open-menu-btn">
#   <i class="fas fa-bars"></i>
#   <%= t('menu.open') %>
# </button>

# <div id="menuOverlay" class="menu-overlay">
#   <div class="menu-container">
#     <div class="menu-header">
#       <h2><%= t('menu.title') %></h2>
#       <button id="closeMenuBtn" class="close-menu-btn">
#         <i class="fas fa-times"></i>
#       </button>
#     </div>
#     <div class="menu-content">
#       <div class="menu-column menu-column-primary">
#         <div class="menu-section-title"><%= t('menu.categories') %></div>
#         <div id="primaryMenuItems" class="menu-items"></div>
#       </div>
#       <div class="menu-column menu-column-secondary">
#         <div class="menu-section-title" id="secondaryTitle"><%= t('menu.select_category') %></div>
#         <div id="secondaryMenuItems" class="menu-items"></div>
#       </div>
#     </div>
#   </div>
# </div>

# <script>
#   // Inicializar menu com dados do Rails
#   document.addEventListener('DOMContentLoaded', () => {
#     const menuData = <%= render_menu_data_json %>;
#     window.twoColumnMenu = new TwoColumnMenu();
#     window.twoColumnMenu.updateMenuData(menuData);
#   });
# </script>
