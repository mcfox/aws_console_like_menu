# Menu de Duas Colunas Simples em HTML, CSS e JavaScript'

Este é um componente de menu interativo de duas colunas desenvolvido para aplicações Ruby on Rails, utilizando apenas HTML, CSS e JavaScript vanilla.
Sem React, Node, Vue, Angular, etc.
Foi fortemente inspirado no menu do console da AWS, 
que por ter muitas opções disponíveis precisa ser bem organizado 
e fácil de navegar e de se localizar suas opções.


## Características

- **Layout responsivo** com duas colunas (30% e 70% da largura)
- **Modal overlay** que ocupa 80% da tela
- **Navegação hierárquica** com dois níveis de menu
- **Ícones e descrições** para cada item do menu
- **Animações suaves** e transições CSS
- **Funcionalidade de Pesquisa** para localizar rapidamente itens do menu por título ou descrição.
- **Opções Fixas:** "Favoritos" e "Usados Recentemente" na primeira coluna.
- **Favoritar Itens:** Estrela clicável ao lado de cada item de segundo nível para marcar/desmarcar como favorito.
- **Usados Recentemente:** Armazena os últimos 10 itens distintos acessados.
- **Compatibilidade total** com Ruby on Rails
- **Sem dependências** externas além do Font Awesome para ícones

## Estrutura dos Arquivos

```
menu/
├── menu.html          # Estrutura HTML do menu
├── menu.css           # Estilos CSS completos
├── menu.js            # Lógica JavaScript
└── README.md          # Esta documentação
```

## Como Usar

### 1. Instalação Básica

Copie os arquivos CSS e JavaScript para sua aplicação Rails:

```bash
# Copiar para assets
cp menu.css app/assets/stylesheets/
cp menu.js app/assets/javascripts/
```

### 2. Incluir no Layout

No seu layout principal (`app/views/layouts/application.html.erb`):

```erb
<%= content_for :head do %>
  <%= stylesheet_link_tag 'menu' %>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
<% end %>

<%= content_for :javascript do %>
  <%= javascript_include_tag 'menu' %>
<% end %>
```

### 3. Adicionar HTML do Menu

Crie uma partial (`app/views/shared/_menu.html.erb`):

```erb
<button id="openMenuBtn" class="open-menu-btn">
  <i class="fas fa-bars"></i>
  Abrir Menu
</button>

<div id="menuOverlay" class="menu-overlay">
  <div class="menu-container">
    <div class="menu-header">
      <h2>Menu Principal</h2>
      <button id="closeMenuBtn" class="close-menu-btn">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <!-- Campo de pesquisa -->
    <div class="menu-search">
        <div class="search-container">
            <i class="fas fa-search search-icon"></i>
            <input type="text" id="menuSearchInput" class="search-input" placeholder="Pesquisar no menu...">
            <button id="clearSearchBtn" class="clear-search-btn" style="display: none;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>

    <div class="menu-content" id="menuContent">
      <div class="menu-column menu-column-primary">
        <div class="menu-section-title">Categorias</div>
        <div id="primaryMenuItems" class="menu-items"></div>
      </div>
      <div class="menu-column menu-column-secondary">
        <div class="menu-section-title" id="secondaryTitle">Selecione uma categoria</div>
        <div id="secondaryMenuItems" class="menu-items"></div>
      </div>
    </div>

    <!-- Resultados da pesquisa -->
    <div class="search-results" id="searchResults">
        <div class="search-results-header" id="searchResultsHeader">
            Resultados da pesquisa
        </div>
        <div class="search-results-list" id="searchResultsList">
            <!-- Os resultados serão inseridos dinamicamente via JavaScript -->
        </div>
    </div>
  </div>
</div>
```

### 4. Configurar Dados do Menu

#### Opção A: Dados Estáticos (JavaScript)

```javascript
// No final do arquivo menu.js ou em um arquivo separado
const customMenuData = [
  {
    id: 'dashboard',
    icon: 'fas fa-tachometer-alt',
    title: 'Dashboard',
    description: 'Visão geral do sistema',
    children: [
      {
        id: 'analytics',
        icon: 'fas fa-chart-line',
        title: 'Analytics',
        description: 'Relatórios detalhados',
        url: '/dashboard/analytics'
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  window.twoColumnMenu = new TwoColumnMenu();
  window.twoColumnMenu.updateMenuData(customMenuData);
});
```

#### Opção B: Dados Dinâmicos (Rails Helper)

Crie um helper (`app/helpers/menu_helper.rb`):

```ruby
module MenuHelper
  def menu_data
    [
      {
        id: 'users',
        icon: 'fas fa-users',
        title: 'Usuários',
        description: 'Gerenciamento de usuários',
        children: [
          {
            id: 'user-list',
            icon: 'fas fa-list',
            title: 'Lista de Usuários',
            description: 'Ver todos os usuários',
            url: users_path
          },
          {
            id: 'user-create',
            icon: 'fas fa-user-plus',
            title: 'Novo Usuário',
            description: 'Criar novo usuário',
            url: new_user_path
          }
        ]
      }
    ]
  end

  def render_menu_data_json
    menu_data.to_json.html_safe
  end
end
```

E na view:

```erb
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const menuData = <%= render_menu_data_json %>;
    window.twoColumnMenu = new TwoColumnMenu();
    window.twoColumnMenu.updateMenuData(menuData);
  });
</script>
```

## Estrutura dos Dados

Cada item do menu deve seguir esta estrutura:

```javascript
{
  id: 'identificador-unico',           // String única
  icon: 'fas fa-icon-name',            // Classe do Font Awesome
  title: 'Título do Item',             // String
  description: 'Descrição do item',    // String
  children: [                          // Array opcional de subitens
    {
      id: 'subitem-id',
      icon: 'fas fa-icon',
      title: 'Título do Subitem',
      description: 'Descrição',
      url: '/caminho/da/rota'           // URL para navegação
    }
  ]
}
```

## API JavaScript

### Métodos Disponíveis

```javascript
// Abrir o menu programaticamente
window.twoColumnMenu.openMenu();

// Fechar o menu programaticamente
window.twoColumnMenu.closeMenu();

// Atualizar dados do menu
window.twoColumnMenu.updateMenuData(newMenuData);

// Selecionar um item específico
window.twoColumnMenu.selectPrimaryItem("item-id");

// Adicionar novo item
window.twoColumnMenu.addMenuItem(parentId, newItem);

// Remover item
window.twoColumnMenu.removeMenuItem(itemId, parentId);

// Realizar pesquisa no menu
window.twoColumnMenu.handleSearch("termo de pesquisa");

// Limpar a pesquisa e voltar ao menu normal
window.twoColumnMenu.clearSearch();

// Adicionar um item aos favoritos
window.twoColumnMenu.addToFavorites(item);

// Remover um item dos favoritos
window.twoColumnMenu.removeFromFavorites(itemId, parentId);

// Adicionar um item aos usados recentemente
window.twoColumnMenu.addToRecentItems(item);

// Remover um item de favoritos ou recentes
window.twoColumnMenu.removeFromSpecialList(item, listType);
```

### Eventos

O menu dispara eventos personalizados que você pode escutar:

```javascript
document.addEventListener('menuOpened', () => {
  console.log('Menu foi aberto');
});

document.addEventListener('menuClosed', () => {
  console.log('Menu foi fechado');
});

document.addEventListener('menuItemSelected', (event) => {
  console.log('Item selecionado:', event.detail);
});
```

## Personalização

### Cores e Estilos

Você pode personalizar as cores editando as variáveis CSS no início do arquivo `menu.css`:

```css
:root {
  --menu-primary-color: #007bff;
  --menu-secondary-color: #6c757d;
  --menu-background: #ffffff;
  --menu-hover-color: rgba(0, 123, 255, 0.05);
}
```

### Responsividade

O menu é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout de duas colunas lado a lado
- **Tablet**: Colunas com proporções ajustadas
- **Mobile**: Layout empilhado verticalmente

## Integração com Permissões

Para integrar com sistemas de permissão (como CanCan), modifique o helper:

```ruby
def menu_data
  items = []
  
  items << dashboard_menu if can?(:read, :dashboard)
  items << users_menu if can?(:manage, User)
  items << products_menu if can?(:manage, Product)
  
  items
end
```

## Suporte a Internacionalização

Para suporte a múltiplos idiomas, use as helpers do Rails:

```ruby
def menu_data
  [
    {
      id: 'users',
      icon: 'fas fa-users',
      title: t('menu.users.title'),
      description: t('menu.users.description'),
      children: [
        {
          id: 'user-list',
          icon: 'fas fa-list',
          title: t('menu.users.list.title'),
          description: t('menu.users.list.description'),
          url: users_path
        }
      ]
    }
  ]
end
```

## Troubleshooting

### Menu não abre
- Verifique se o JavaScript foi carregado corretamente
- Confirme se não há erros no console do navegador
- Certifique-se de que o Font Awesome está carregado

### Estilos não aplicados
- Verifique se o CSS foi incluído no pipeline de assets
- Confirme se não há conflitos com outros estilos CSS
- Use as ferramentas de desenvolvedor para inspecionar os elementos

### Navegação não funciona
- Verifique se as URLs nos dados do menu estão corretas
- Confirme se as rotas estão definidas no `routes.rb`
- Para debugging, remova o comentário do `console.log` no método `navigateToItem`

## Licença

Este componente é fornecido como está, sem garantias. Você pode usar, modificar e distribuir livremente em seus projetos Rails.
