// Estrutura de dados do menu (exemplo expandido com 10 itens principais)
const defaultMenuData = [
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
                description: 'Relatórios e análises detalhadas de performance',
                url: '/dashboard/analytics'
            },
            {
                id: 'reports',
                icon: 'fas fa-file-alt',
                title: 'Relatórios',
                description: 'Geração e visualização de relatórios personalizados',
                url: '/dashboard/reports'
            },
            {
                id: 'metrics',
                icon: 'fas fa-chart-bar',
                title: 'Métricas',
                description: 'KPIs e indicadores de performance em tempo real',
                url: '/dashboard/metrics'
            },
            {
                id: 'widgets',
                icon: 'fas fa-th',
                title: 'Widgets',
                description: 'Configurar e personalizar widgets do dashboard',
                url: '/dashboard/widgets'
            },
            {
                id: 'alerts',
                icon: 'fas fa-exclamation-triangle',
                title: 'Alertas',
                description: 'Monitoramento e configuração de alertas do sistema',
                url: '/dashboard/alerts'
            },
            {
                id: 'export',
                icon: 'fas fa-download',
                title: 'Exportar Dados',
                description: 'Exportar dados do dashboard em diversos formatos',
                url: '/dashboard/export'
            },
            {
                id: 'realtime',
                icon: 'fas fa-broadcast-tower',
                title: 'Tempo Real',
                description: 'Monitoramento de dados em tempo real',
                url: '/dashboard/realtime'
            },
            {
                id: 'history',
                icon: 'fas fa-history',
                title: 'Histórico',
                description: 'Visualizar histórico de dados e mudanças',
                url: '/dashboard/history'
            },
            {
                id: 'favorites',
                icon: 'fas fa-star',
                title: 'Favoritos',
                description: 'Seus relatórios e métricas favoritos',
                url: '/dashboard/favorites'
            },
            {
                id: 'sharing',
                icon: 'fas fa-share-alt',
                title: 'Compartilhamento',
                description: 'Compartilhar dashboards com outros usuários',
                url: '/dashboard/sharing'
            },
            {
                id: 'templates',
                icon: 'fas fa-layer-group',
                title: 'Templates',
                description: 'Modelos pré-configurados de dashboard',
                url: '/dashboard/templates'
            },
            {
                id: 'automation',
                icon: 'fas fa-robot',
                title: 'Automação',
                description: 'Configurar automações e triggers',
                url: '/dashboard/automation'
            },
            {
                id: 'api-access',
                icon: 'fas fa-code',
                title: 'Acesso API',
                description: 'Configurações de acesso via API',
                url: '/dashboard/api'
            },
            {
                id: 'mobile-view',
                icon: 'fas fa-mobile-alt',
                title: 'Visualização Mobile',
                description: 'Otimizar dashboard para dispositivos móveis',
                url: '/dashboard/mobile'
            },
            {
                id: 'performance',
                icon: 'fas fa-rocket',
                title: 'Performance',
                description: 'Análise de performance do sistema',
                url: '/dashboard/performance'
            }
        ]
    },
    {
        id: 'users',
        icon: 'fas fa-users',
        title: 'Usuários',
        description: 'Gerenciamento completo de usuários e permissões',
        children: [
            {
                id: 'user-list',
                icon: 'fas fa-list',
                title: 'Lista de Usuários',
                description: 'Visualizar e gerenciar todos os usuários do sistema',
                url: '/users'
            },
            {
                id: 'user-create',
                icon: 'fas fa-user-plus',
                title: 'Novo Usuário',
                description: 'Criar novo usuário no sistema',
                url: '/users/new'
            },
            {
                id: 'user-roles',
                icon: 'fas fa-user-shield',
                title: 'Perfis e Permissões',
                description: 'Gerenciar perfis e permissões de acesso',
                url: '/users/roles'
            },
            {
                id: 'user-groups',
                icon: 'fas fa-users-cog',
                title: 'Grupos',
                description: 'Organizar usuários em grupos funcionais',
                url: '/users/groups'
            },
            {
                id: 'user-import',
                icon: 'fas fa-file-import',
                title: 'Importar Usuários',
                description: 'Importar usuários em lote via CSV ou Excel',
                url: '/users/import'
            },
            {
                id: 'user-export',
                icon: 'fas fa-file-export',
                title: 'Exportar Usuários',
                description: 'Exportar lista de usuários em diversos formatos',
                url: '/users/export'
            },
            {
                id: 'user-activity',
                icon: 'fas fa-chart-line',
                title: 'Atividade dos Usuários',
                description: 'Monitorar atividade e logs de usuários',
                url: '/users/activity'
            },
            {
                id: 'user-sessions',
                icon: 'fas fa-clock',
                title: 'Sessões Ativas',
                description: 'Gerenciar sessões ativas dos usuários',
                url: '/users/sessions'
            },
            {
                id: 'user-preferences',
                icon: 'fas fa-cog',
                title: 'Preferências',
                description: 'Configurações padrão para novos usuários',
                url: '/users/preferences'
            },
            {
                id: 'user-notifications',
                icon: 'fas fa-bell',
                title: 'Notificações',
                description: 'Configurar notificações para usuários',
                url: '/users/notifications'
            },
            {
                id: 'user-security',
                icon: 'fas fa-lock',
                title: 'Segurança',
                description: 'Políticas de segurança e autenticação',
                url: '/users/security'
            },
            {
                id: 'user-backup',
                icon: 'fas fa-database',
                title: 'Backup de Dados',
                description: 'Backup e restauração de dados de usuários',
                url: '/users/backup'
            },
            {
                id: 'user-analytics',
                icon: 'fas fa-chart-pie',
                title: 'Analytics de Usuários',
                description: 'Análises e estatísticas sobre usuários',
                url: '/users/analytics'
            },
            {
                id: 'user-compliance',
                icon: 'fas fa-balance-scale',
                title: 'Compliance',
                description: 'Conformidade e auditoria de usuários',
                url: '/users/compliance'
            },
            {
                id: 'user-support',
                icon: 'fas fa-life-ring',
                title: 'Suporte',
                description: 'Ferramentas de suporte ao usuário',
                url: '/users/support'
            }
        ]
    },
    {
        id: 'products',
        icon: 'fas fa-box',
        title: 'Produtos',
        description: 'Catálogo completo e gestão avançada de produtos',
        children: [
            {
                id: 'product-list',
                icon: 'fas fa-list',
                title: 'Lista de Produtos',
                description: 'Visualizar todos os produtos cadastrados no sistema',
                url: '/products'
            },
            {
                id: 'product-create',
                icon: 'fas fa-plus',
                title: 'Novo Produto',
                description: 'Cadastrar novo produto no catálogo',
                url: '/products/new'
            },
            {
                id: 'categories',
                icon: 'fas fa-tags',
                title: 'Categorias',
                description: 'Gerenciar categorias e subcategorias de produtos',
                url: '/products/categories'
            },
            {
                id: 'inventory',
                icon: 'fas fa-warehouse',
                title: 'Estoque',
                description: 'Controle avançado de estoque e inventário',
                url: '/products/inventory'
            },
            {
                id: 'pricing',
                icon: 'fas fa-dollar-sign',
                title: 'Precificação',
                description: 'Gerenciar preços e políticas de desconto',
                url: '/products/pricing'
            },
            {
                id: 'variants',
                icon: 'fas fa-layer-group',
                title: 'Variações',
                description: 'Configurar variações de produtos (cor, tamanho, etc)',
                url: '/products/variants'
            },
            {
                id: 'suppliers',
                icon: 'fas fa-truck',
                title: 'Fornecedores',
                description: 'Gerenciar fornecedores e relacionamentos',
                url: '/products/suppliers'
            },
            {
                id: 'reviews',
                icon: 'fas fa-star',
                title: 'Avaliações',
                description: 'Moderar e gerenciar avaliações de produtos',
                url: '/products/reviews'
            },
            {
                id: 'bundles',
                icon: 'fas fa-gift',
                title: 'Pacotes',
                description: 'Criar e gerenciar pacotes de produtos',
                url: '/products/bundles'
            },
            {
                id: 'promotions',
                icon: 'fas fa-percentage',
                title: 'Promoções',
                description: 'Configurar promoções e campanhas',
                url: '/products/promotions'
            },
            {
                id: 'analytics-products',
                icon: 'fas fa-chart-bar',
                title: 'Analytics',
                description: 'Análises de performance de produtos',
                url: '/products/analytics'
            },
            {
                id: 'import-products',
                icon: 'fas fa-upload',
                title: 'Importação',
                description: 'Importar produtos em lote',
                url: '/products/import'
            },
            {
                id: 'export-products',
                icon: 'fas fa-download',
                title: 'Exportação',
                description: 'Exportar catálogo de produtos',
                url: '/products/export'
            },
            {
                id: 'seo-products',
                icon: 'fas fa-search',
                title: 'SEO',
                description: 'Otimização para mecanismos de busca',
                url: '/products/seo'
            },
            {
                id: 'recommendations',
                icon: 'fas fa-lightbulb',
                title: 'Recomendações',
                description: 'Sistema de recomendação de produtos',
                url: '/products/recommendations'
            }
        ]
    },
    {
        id: 'orders',
        icon: 'fas fa-shopping-cart',
        title: 'Pedidos',
        description: 'Gestão completa de pedidos, vendas e fulfillment',
        children: [
            {
                id: 'order-list',
                icon: 'fas fa-list',
                title: 'Lista de Pedidos',
                description: 'Visualizar e gerenciar todos os pedidos',
                url: '/orders'
            },
            {
                id: 'order-pending',
                icon: 'fas fa-clock',
                title: 'Pedidos Pendentes',
                description: 'Pedidos aguardando processamento',
                url: '/orders/pending'
            },
            {
                id: 'order-processing',
                icon: 'fas fa-cogs',
                title: 'Em Processamento',
                description: 'Pedidos sendo processados no momento',
                url: '/orders/processing'
            },
            {
                id: 'order-shipped',
                icon: 'fas fa-shipping-fast',
                title: 'Pedidos Enviados',
                description: 'Pedidos já enviados aos clientes',
                url: '/orders/shipped'
            },
            {
                id: 'order-delivered',
                icon: 'fas fa-check-circle',
                title: 'Entregues',
                description: 'Pedidos entregues com sucesso',
                url: '/orders/delivered'
            },
            {
                id: 'order-cancelled',
                icon: 'fas fa-times-circle',
                title: 'Cancelados',
                description: 'Pedidos cancelados e devoluções',
                url: '/orders/cancelled'
            },
            {
                id: 'order-returns',
                icon: 'fas fa-undo',
                title: 'Devoluções',
                description: 'Gerenciar devoluções e trocas',
                url: '/orders/returns'
            },
            {
                id: 'order-tracking',
                icon: 'fas fa-map-marker-alt',
                title: 'Rastreamento',
                description: 'Sistema de rastreamento de entregas',
                url: '/orders/tracking'
            },
            {
                id: 'order-invoices',
                icon: 'fas fa-file-invoice',
                title: 'Faturas',
                description: 'Gerenciar faturas e documentos fiscais',
                url: '/orders/invoices'
            },
            {
                id: 'order-payments',
                icon: 'fas fa-credit-card',
                title: 'Pagamentos',
                description: 'Status e processamento de pagamentos',
                url: '/orders/payments'
            },
            {
                id: 'order-fulfillment',
                icon: 'fas fa-boxes',
                title: 'Fulfillment',
                description: 'Centro de distribuição e logística',
                url: '/orders/fulfillment'
            },
            {
                id: 'order-reports',
                icon: 'fas fa-chart-line',
                title: 'Relatórios',
                description: 'Relatórios de vendas e performance',
                url: '/orders/reports'
            },
            {
                id: 'order-automation',
                icon: 'fas fa-robot',
                title: 'Automação',
                description: 'Automatizar processos de pedidos',
                url: '/orders/automation'
            },
            {
                id: 'order-notifications',
                icon: 'fas fa-bell',
                title: 'Notificações',
                description: 'Configurar notificações de pedidos',
                url: '/orders/notifications'
            },
            {
                id: 'order-analytics',
                icon: 'fas fa-chart-pie',
                title: 'Analytics',
                description: 'Análises avançadas de vendas',
                url: '/orders/analytics'
            }
        ]
    },
    {
        id: 'customers',
        icon: 'fas fa-user-friends',
        title: 'Clientes',
        description: 'CRM e gestão completa de relacionamento com clientes',
        children: [
            {
                id: 'customer-list',
                icon: 'fas fa-address-book',
                title: 'Lista de Clientes',
                description: 'Base completa de dados dos clientes',
                url: '/customers'
            },
            {
                id: 'customer-segments',
                icon: 'fas fa-layer-group',
                title: 'Segmentação',
                description: 'Segmentar clientes por comportamento e perfil',
                url: '/customers/segments'
            },
            {
                id: 'customer-journey',
                icon: 'fas fa-route',
                title: 'Jornada do Cliente',
                description: 'Mapear e otimizar a jornada do cliente',
                url: '/customers/journey'
            },
            {
                id: 'customer-support',
                icon: 'fas fa-headset',
                title: 'Suporte',
                description: 'Central de atendimento ao cliente',
                url: '/customers/support'
            },
            {
                id: 'customer-feedback',
                icon: 'fas fa-comments',
                title: 'Feedback',
                description: 'Coletar e analisar feedback dos clientes',
                url: '/customers/feedback'
            },
            {
                id: 'customer-loyalty',
                icon: 'fas fa-heart',
                title: 'Programa de Fidelidade',
                description: 'Gerenciar programa de pontos e recompensas',
                url: '/customers/loyalty'
            },
            {
                id: 'customer-communication',
                icon: 'fas fa-envelope',
                title: 'Comunicação',
                description: 'Email marketing e comunicação direcionada',
                url: '/customers/communication'
            },
            {
                id: 'customer-analytics',
                icon: 'fas fa-chart-area',
                title: 'Analytics',
                description: 'Análise comportamental e lifetime value',
                url: '/customers/analytics'
            },
            {
                id: 'customer-acquisition',
                icon: 'fas fa-user-plus',
                title: 'Aquisição',
                description: 'Estratégias de aquisição de novos clientes',
                url: '/customers/acquisition'
            },
            {
                id: 'customer-retention',
                icon: 'fas fa-user-check',
                title: 'Retenção',
                description: 'Programas de retenção e engajamento',
                url: '/customers/retention'
            },
            {
                id: 'customer-preferences',
                icon: 'fas fa-sliders-h',
                title: 'Preferências',
                description: 'Gerenciar preferências e configurações',
                url: '/customers/preferences'
            },
            {
                id: 'customer-history',
                icon: 'fas fa-history',
                title: 'Histórico',
                description: 'Histórico completo de interações',
                url: '/customers/history'
            },
            {
                id: 'customer-referrals',
                icon: 'fas fa-share-alt',
                title: 'Indicações',
                description: 'Programa de indicações e referências',
                url: '/customers/referrals'
            },
            {
                id: 'customer-surveys',
                icon: 'fas fa-poll',
                title: 'Pesquisas',
                description: 'Criar e gerenciar pesquisas de satisfação',
                url: '/customers/surveys'
            },
            {
                id: 'customer-gdpr',
                icon: 'fas fa-shield-alt',
                title: 'LGPD/GDPR',
                description: 'Conformidade com proteção de dados',
                url: '/customers/gdpr'
            }
        ]
    },
    {
        id: 'marketing',
        icon: 'fas fa-bullhorn',
        title: 'Marketing',
        description: 'Ferramentas completas de marketing digital e campanhas',
        children: [
            {
                id: 'campaigns',
                icon: 'fas fa-rocket',
                title: 'Campanhas',
                description: 'Criar e gerenciar campanhas de marketing',
                url: '/marketing/campaigns'
            },
            {
                id: 'email-marketing',
                icon: 'fas fa-envelope-open',
                title: 'Email Marketing',
                description: 'Automação e campanhas de email',
                url: '/marketing/email'
            },
            {
                id: 'social-media',
                icon: 'fas fa-share-alt',
                title: 'Redes Sociais',
                description: 'Gerenciar presença em redes sociais',
                url: '/marketing/social'
            },
            {
                id: 'content-marketing',
                icon: 'fas fa-edit',
                title: 'Marketing de Conteúdo',
                description: 'Estratégia e criação de conteúdo',
                url: '/marketing/content'
            },
            {
                id: 'seo-marketing',
                icon: 'fas fa-search',
                title: 'SEO',
                description: 'Otimização para mecanismos de busca',
                url: '/marketing/seo'
            },
            {
                id: 'paid-ads',
                icon: 'fas fa-ad',
                title: 'Anúncios Pagos',
                description: 'Google Ads, Facebook Ads e outras plataformas',
                url: '/marketing/ads'
            },
            {
                id: 'landing-pages',
                icon: 'fas fa-file-alt',
                title: 'Landing Pages',
                description: 'Criar e otimizar páginas de conversão',
                url: '/marketing/landing-pages'
            },
            {
                id: 'ab-testing',
                icon: 'fas fa-flask',
                title: 'Testes A/B',
                description: 'Experimentação e otimização de conversão',
                url: '/marketing/ab-testing'
            },
            {
                id: 'marketing-automation',
                icon: 'fas fa-cogs',
                title: 'Automação',
                description: 'Fluxos automatizados de marketing',
                url: '/marketing/automation'
            },
            {
                id: 'lead-generation',
                icon: 'fas fa-magnet',
                title: 'Geração de Leads',
                description: 'Captura e qualificação de leads',
                url: '/marketing/leads'
            },
            {
                id: 'marketing-analytics',
                icon: 'fas fa-chart-line',
                title: 'Analytics',
                description: 'ROI e performance de campanhas',
                url: '/marketing/analytics'
            },
            {
                id: 'influencer-marketing',
                icon: 'fas fa-users',
                title: 'Marketing de Influência',
                description: 'Parcerias com influenciadores',
                url: '/marketing/influencers'
            },
            {
                id: 'affiliate-program',
                icon: 'fas fa-handshake',
                title: 'Programa de Afiliados',
                description: 'Gerenciar rede de afiliados',
                url: '/marketing/affiliates'
            },
            {
                id: 'event-marketing',
                icon: 'fas fa-calendar-alt',
                title: 'Marketing de Eventos',
                description: 'Webinars, workshops e eventos',
                url: '/marketing/events'
            },
            {
                id: 'brand-management',
                icon: 'fas fa-award',
                title: 'Gestão de Marca',
                description: 'Identidade visual e brand guidelines',
                url: '/marketing/brand'
            }
        ]
    },
    {
        id: 'finance',
        icon: 'fas fa-chart-pie',
        title: 'Financeiro',
        description: 'Gestão financeira completa e controle de fluxo de caixa',
        children: [
            {
                id: 'financial-dashboard',
                icon: 'fas fa-tachometer-alt',
                title: 'Dashboard Financeiro',
                description: 'Visão geral da situação financeira',
                url: '/finance/dashboard'
            },
            {
                id: 'accounts-receivable',
                icon: 'fas fa-money-bill-wave',
                title: 'Contas a Receber',
                description: 'Gestão de recebimentos e cobranças',
                url: '/finance/receivable'
            },
            {
                id: 'accounts-payable',
                icon: 'fas fa-file-invoice-dollar',
                title: 'Contas a Pagar',
                description: 'Controle de pagamentos e fornecedores',
                url: '/finance/payable'
            },
            {
                id: 'cash-flow',
                icon: 'fas fa-exchange-alt',
                title: 'Fluxo de Caixa',
                description: 'Projeções e controle de fluxo de caixa',
                url: '/finance/cash-flow'
            },
            {
                id: 'budgeting',
                icon: 'fas fa-calculator',
                title: 'Orçamento',
                description: 'Planejamento e controle orçamentário',
                url: '/finance/budget'
            },
            {
                id: 'financial-reports',
                icon: 'fas fa-chart-bar',
                title: 'Relatórios Financeiros',
                description: 'DRE, Balanço e demonstrativos',
                url: '/finance/reports'
            },
            {
                id: 'tax-management',
                icon: 'fas fa-receipt',
                title: 'Gestão Fiscal',
                description: 'Impostos e obrigações fiscais',
                url: '/finance/tax'
            },
            {
                id: 'bank-reconciliation',
                icon: 'fas fa-university',
                title: 'Conciliação Bancária',
                description: 'Conciliar extratos e movimentações',
                url: '/finance/reconciliation'
            },
            {
                id: 'cost-center',
                icon: 'fas fa-sitemap',
                title: 'Centro de Custos',
                description: 'Organização por centros de custo',
                url: '/finance/cost-center'
            },
            {
                id: 'financial-planning',
                icon: 'fas fa-chart-line',
                title: 'Planejamento Financeiro',
                description: 'Projeções e cenários futuros',
                url: '/finance/planning'
            },
            {
                id: 'investment-tracking',
                icon: 'fas fa-seedling',
                title: 'Controle de Investimentos',
                description: 'Acompanhar investimentos e aplicações',
                url: '/finance/investments'
            },
            {
                id: 'expense-management',
                icon: 'fas fa-credit-card',
                title: 'Gestão de Despesas',
                description: 'Controle de despesas corporativas',
                url: '/finance/expenses'
            },
            {
                id: 'financial-audit',
                icon: 'fas fa-search-dollar',
                title: 'Auditoria',
                description: 'Trilhas de auditoria e compliance',
                url: '/finance/audit'
            },
            {
                id: 'payment-processing',
                icon: 'fas fa-credit-card',
                title: 'Processamento de Pagamentos',
                description: 'Gateway e métodos de pagamento',
                url: '/finance/payments'
            },
            {
                id: 'financial-integration',
                icon: 'fas fa-plug',
                title: 'Integrações',
                description: 'Integração com bancos e sistemas',
                url: '/finance/integrations'
            }
        ]
    },
    {
        id: 'inventory',
        icon: 'fas fa-warehouse',
        title: 'Estoque',
        description: 'Gestão avançada de estoque e controle de inventário',
        children: [
            {
                id: 'inventory-overview',
                icon: 'fas fa-boxes',
                title: 'Visão Geral',
                description: 'Status geral do estoque em tempo real',
                url: '/inventory/overview'
            },
            {
                id: 'stock-movements',
                icon: 'fas fa-exchange-alt',
                title: 'Movimentações',
                description: 'Histórico de entradas e saídas',
                url: '/inventory/movements'
            },
            {
                id: 'stock-adjustments',
                icon: 'fas fa-edit',
                title: 'Ajustes de Estoque',
                description: 'Correções e ajustes manuais',
                url: '/inventory/adjustments'
            },
            {
                id: 'reorder-points',
                icon: 'fas fa-exclamation-triangle',
                title: 'Pontos de Reposição',
                description: 'Configurar alertas de estoque baixo',
                url: '/inventory/reorder'
            },
            {
                id: 'purchase-orders',
                icon: 'fas fa-shopping-cart',
                title: 'Ordens de Compra',
                description: 'Gerenciar pedidos para fornecedores',
                url: '/inventory/purchase-orders'
            },
            {
                id: 'receiving',
                icon: 'fas fa-truck-loading',
                title: 'Recebimento',
                description: 'Processar recebimento de mercadorias',
                url: '/inventory/receiving'
            },
            {
                id: 'cycle-counting',
                icon: 'fas fa-clipboard-check',
                title: 'Contagem Cíclica',
                description: 'Inventários rotativos e contagens',
                url: '/inventory/cycle-counting'
            },
            {
                id: 'warehouse-management',
                icon: 'fas fa-warehouse',
                title: 'Gestão de Armazém',
                description: 'Layout e organização do armazém',
                url: '/inventory/warehouse'
            },
            {
                id: 'barcode-scanning',
                icon: 'fas fa-barcode',
                title: 'Código de Barras',
                description: 'Sistema de códigos de barras e QR',
                url: '/inventory/barcode'
            },
            {
                id: 'lot-tracking',
                icon: 'fas fa-tags',
                title: 'Rastreamento de Lotes',
                description: 'Controle por lotes e validades',
                url: '/inventory/lots'
            },
            {
                id: 'inventory-valuation',
                icon: 'fas fa-dollar-sign',
                title: 'Valoração de Estoque',
                description: 'FIFO, LIFO e custo médio',
                url: '/inventory/valuation'
            },
            {
                id: 'demand-forecasting',
                icon: 'fas fa-chart-line',
                title: 'Previsão de Demanda',
                description: 'Análise preditiva de demanda',
                url: '/inventory/forecasting'
            },
            {
                id: 'inventory-reports',
                icon: 'fas fa-file-alt',
                title: 'Relatórios',
                description: 'Relatórios de giro e performance',
                url: '/inventory/reports'
            },
            {
                id: 'multi-location',
                icon: 'fas fa-map-marker-alt',
                title: 'Múltiplas Localizações',
                description: 'Gestão de estoque em várias filiais',
                url: '/inventory/locations'
            },
            {
                id: 'inventory-optimization',
                icon: 'fas fa-chart-area',
                title: 'Otimização',
                description: 'Otimizar níveis e custos de estoque',
                url: '/inventory/optimization'
            }
        ]
    },
    {
        id: 'analytics',
        icon: 'fas fa-chart-line',
        title: 'Analytics',
        description: 'Business Intelligence e análise avançada de dados',
        children: [
            {
                id: 'business-intelligence',
                icon: 'fas fa-brain',
                title: 'Business Intelligence',
                description: 'Dashboards executivos e KPIs estratégicos',
                url: '/analytics/bi'
            },
            {
                id: 'data-visualization',
                icon: 'fas fa-chart-pie',
                title: 'Visualização de Dados',
                description: 'Gráficos interativos e dashboards',
                url: '/analytics/visualization'
            },
            {
                id: 'predictive-analytics',
                icon: 'fas fa-crystal-ball',
                title: 'Analytics Preditiva',
                description: 'Machine learning e previsões',
                url: '/analytics/predictive'
            },
            {
                id: 'customer-analytics',
                icon: 'fas fa-users',
                title: 'Analytics de Clientes',
                description: 'Comportamento e segmentação de clientes',
                url: '/analytics/customers'
            },
            {
                id: 'sales-analytics',
                icon: 'fas fa-chart-bar',
                title: 'Analytics de Vendas',
                description: 'Performance de vendas e tendências',
                url: '/analytics/sales'
            },
            {
                id: 'web-analytics',
                icon: 'fas fa-globe',
                title: 'Web Analytics',
                description: 'Google Analytics e métricas web',
                url: '/analytics/web'
            },
            {
                id: 'cohort-analysis',
                icon: 'fas fa-layer-group',
                title: 'Análise de Coorte',
                description: 'Análise comportamental por coortes',
                url: '/analytics/cohort'
            },
            {
                id: 'funnel-analysis',
                icon: 'fas fa-filter',
                title: 'Análise de Funil',
                description: 'Conversão e otimização de funis',
                url: '/analytics/funnel'
            },
            {
                id: 'real-time-analytics',
                icon: 'fas fa-broadcast-tower',
                title: 'Analytics em Tempo Real',
                description: 'Monitoramento em tempo real',
                url: '/analytics/realtime'
            },
            {
                id: 'custom-reports',
                icon: 'fas fa-file-alt',
                title: 'Relatórios Personalizados',
                description: 'Criar relatórios sob medida',
                url: '/analytics/custom-reports'
            },
            {
                id: 'data-export',
                icon: 'fas fa-download',
                title: 'Exportação de Dados',
                description: 'Exportar dados para análise externa',
                url: '/analytics/export'
            },
            {
                id: 'data-quality',
                icon: 'fas fa-check-circle',
                title: 'Qualidade de Dados',
                description: 'Validação e limpeza de dados',
                url: '/analytics/data-quality'
            },
            {
                id: 'automated-insights',
                icon: 'fas fa-robot',
                title: 'Insights Automatizados',
                description: 'IA para descoberta automática de insights',
                url: '/analytics/automated-insights'
            },
            {
                id: 'benchmark-analysis',
                icon: 'fas fa-balance-scale',
                title: 'Análise Comparativa',
                description: 'Benchmarking e análise competitiva',
                url: '/analytics/benchmark'
            },
            {
                id: 'data-governance',
                icon: 'fas fa-shield-alt',
                title: 'Governança de Dados',
                description: 'Políticas e controle de acesso a dados',
                url: '/analytics/governance'
            }
        ]
    },
    {
        id: 'settings',
        icon: 'fas fa-cog',
        title: 'Configurações',
        description: 'Configurações gerais do sistema e administração',
        children: [
            {
                id: 'general-settings',
                icon: 'fas fa-sliders-h',
                title: 'Configurações Gerais',
                description: 'Configurações básicas da aplicação',
                url: '/settings/general'
            },
            {
                id: 'security-settings',
                icon: 'fas fa-shield-alt',
                title: 'Segurança',
                description: 'Configurações de segurança e autenticação',
                url: '/settings/security'
            },
            {
                id: 'notification-settings',
                icon: 'fas fa-bell',
                title: 'Notificações',
                description: 'Configurar notificações do sistema',
                url: '/settings/notifications'
            },
            {
                id: 'integration-settings',
                icon: 'fas fa-plug',
                title: 'Integrações',
                description: 'Gerenciar integrações com sistemas externos',
                url: '/settings/integrations'
            },
            {
                id: 'api-settings',
                icon: 'fas fa-code',
                title: 'Configurações de API',
                description: 'Chaves de API e configurações de acesso',
                url: '/settings/api'
            },
            {
                id: 'backup-settings',
                icon: 'fas fa-database',
                title: 'Backup e Restauração',
                description: 'Configurar backups automáticos',
                url: '/settings/backup'
            },
            {
                id: 'email-settings',
                icon: 'fas fa-envelope',
                title: 'Configurações de Email',
                description: 'SMTP e templates de email',
                url: '/settings/email'
            },
            {
                id: 'theme-settings',
                icon: 'fas fa-palette',
                title: 'Tema e Aparência',
                description: 'Personalizar interface e branding',
                url: '/settings/theme'
            },
            {
                id: 'language-settings',
                icon: 'fas fa-language',
                title: 'Idioma e Localização',
                description: 'Configurações de idioma e região',
                url: '/settings/language'
            },
            {
                id: 'performance-settings',
                icon: 'fas fa-tachometer-alt',
                title: 'Performance',
                description: 'Otimizações e configurações de cache',
                url: '/settings/performance'
            },
            {
                id: 'audit-logs',
                icon: 'fas fa-history',
                title: 'Logs de Auditoria',
                description: 'Histórico de ações e alterações',
                url: '/settings/audit'
            },
            {
                id: 'system-health',
                icon: 'fas fa-heartbeat',
                title: 'Saúde do Sistema',
                description: 'Monitoramento e diagnósticos',
                url: '/settings/health'
            },
            {
                id: 'license-management',
                icon: 'fas fa-certificate',
                title: 'Gerenciamento de Licenças',
                description: 'Licenças e assinaturas ativas',
                url: '/settings/licenses'
            },
            {
                id: 'data-retention',
                icon: 'fas fa-archive',
                title: 'Retenção de Dados',
                description: 'Políticas de retenção e arquivamento',
                url: '/settings/retention'
            },
            {
                id: 'system-updates',
                icon: 'fas fa-sync-alt',
                title: 'Atualizações do Sistema',
                description: 'Gerenciar atualizações e patches',
                url: '/settings/updates'
            }
        ]
    }
];

class TwoColumnMenu {
    constructor() {
        this.menuData = [];
        this.currentPrimaryItem = null;
        this.isOpen = false;
        
        // Dados para favoritos e recentes
        this.favorites = this.loadFavorites();
        this.recentItems = this.loadRecentItems();
        
        this.initializeElements();
        this.bindEvents();
        this.loadDefaultData();
    }
    
    loadDefaultData() {
        this.updateMenuData(defaultMenuData);
        
        // Selecionar o primeiro item por padrão
        if (this.menuData.length > 0) {
            this.selectPrimaryItem(this.menuData[0].id);
        }
    }
    
    initializeElements() {
        this.openBtn = document.getElementById('openMenuBtn');
        this.closeBtn = document.getElementById('closeMenuBtn');
        this.overlay = document.getElementById('menuOverlay');
        this.primaryContainer = document.getElementById('primaryMenuItems');
        this.secondaryContainer = document.getElementById('secondaryMenuItems');
        this.secondaryTitle = document.getElementById('secondaryTitle');
        
        // Elementos de pesquisa
        this.searchInput = document.getElementById('menuSearchInput');
        this.clearSearchBtn = document.getElementById('clearSearchBtn');
        this.menuContent = document.getElementById('menuContent');
        this.searchResults = document.getElementById('searchResults');
        this.searchResultsHeader = document.getElementById('searchResultsHeader');
        this.searchResultsList = document.getElementById('searchResultsList');
    }
    
    bindEvents() {
        // Abrir menu
        this.openBtn.addEventListener('click', () => this.openMenu());
        
        // Fechar menu
        this.closeBtn.addEventListener('click', () => this.closeMenu());
        
        // Fechar menu clicando no overlay
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.closeMenu();
            }
        });
        
        // Fechar menu com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
        
        // Eventos de pesquisa
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.clearSearch();
            }
        });
        this.clearSearchBtn.addEventListener('click', () => this.clearSearch());
    }
    
    openMenu() {
        this.isOpen = true;
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeMenu() {
        this.isOpen = false;
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    renderPrimaryMenu() {
        this.primaryContainer.innerHTML = '';
        
        // Adicionar favoritos e recentes no início
        const favoritesItem = this.createPrimaryMenuItem(this.getFavoritesData());
        const recentItem = this.createPrimaryMenuItem(this.getRecentItemsData());
        
        this.primaryContainer.appendChild(favoritesItem);
        this.primaryContainer.appendChild(recentItem);
        
        // Adicionar separador
        const separator = document.createElement('div');
        separator.className = 'menu-separator';
        this.primaryContainer.appendChild(separator);
        
        // Adicionar itens normais do menu
        this.menuData.forEach(item => {
            const menuItem = this.createPrimaryMenuItem(item);
            this.primaryContainer.appendChild(menuItem);
        });
    }
    
    selectPrimaryItem(itemId) {
        // Remover seleção anterior
        const previousSelected = this.primaryContainer.querySelector('.menu-item.active');
        if (previousSelected) {
            previousSelected.classList.remove('active');
        }
        
        // Encontrar e selecionar o novo item
        const selectedElement = this.primaryContainer.querySelector(`[data-item-id="${itemId}"]`);
        if (selectedElement) {
            selectedElement.classList.add('active');
        }
        
        // Encontrar os dados do item (incluindo favoritos e recentes)
        let item = null;
        
        if (itemId === 'favorites') {
            item = this.getFavoritesData();
        } else if (itemId === 'recent') {
            item = this.getRecentItemsData();
        } else {
            item = this.menuData.find(item => item.id === itemId);
        }
        
        if (item) {
            this.currentPrimaryItem = item;
            this.renderSecondaryMenu(item);
        }
    }
    
    renderSecondaryMenu(primaryItem) {
        this.secondaryTitle.textContent = primaryItem.title;
        this.secondaryContainer.innerHTML = '';
        
        if (!primaryItem.children || primaryItem.children.length === 0) {
            this.renderEmptyState();
            return;
        }
        
        primaryItem.children.forEach(item => {
            const menuItem = this.createSecondaryMenuItem(item, primaryItem.id);
            this.secondaryContainer.appendChild(menuItem);
        });
    }
    
    createSecondaryMenuItem(item, parentId) {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.setAttribute('data-item-id', item.id);
        
        const icon = document.createElement('div');
        icon.className = 'menu-item-icon';
        icon.innerHTML = `<i class="${item.icon}"></i>`;
        
        const content = document.createElement('div');
        content.className = 'menu-item-content';
        
        const title = document.createElement('div');
        title.className = 'menu-item-title';
        title.textContent = item.title;
        
        const description = document.createElement('div');
        description.className = 'menu-item-description';
        description.textContent = item.description;
        
        content.appendChild(title);
        content.appendChild(description);
        
        menuItem.appendChild(icon);
        menuItem.appendChild(content);
        
        // Adicionar estrela de favorito (apenas para itens normais, não para favoritos/recentes)
        if (parentId !== 'favorites' && parentId !== 'recent') {
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = 'favorite-btn';
            favoriteBtn.setAttribute('data-item-id', item.id);
            favoriteBtn.setAttribute('data-parent-id', parentId);
            
            const isFav = this.isFavorite(item.id, parentId);
            favoriteBtn.innerHTML = `<i class="fas fa-star ${isFav ? 'favorited' : ''}"></i>`;
            
            favoriteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFavorite(item, parentId, favoriteBtn);
            });
            
            menuItem.appendChild(favoriteBtn);
        }
        
        // Adicionar botão de remoção para favoritos e recentes
        if (parentId === 'favorites' || parentId === 'recent') {
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.setAttribute('data-item-id', item.id);
            removeBtn.setAttribute('data-parent-id', parentId);
            removeBtn.innerHTML = `<i class="fas fa-times"></i>`;
            removeBtn.title = parentId === 'favorites' ? 'Remover dos favoritos' : 'Remover dos recentes';
            
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.removeFromSpecialList(item, parentId, removeBtn);
            });
            
            menuItem.appendChild(removeBtn);
        }
        
        // Adicionar evento de clique
        menuItem.addEventListener('click', () => {
            this.navigateToItem(item);
        });
        
        return menuItem;
    }
    
    renderEmptyState() {
        const emptyState = document.createElement('div');
        emptyState.className = 'menu-empty-state';
        emptyState.innerHTML = `
            <i class="fas fa-folder-open"></i>
            <p>Nenhum item disponível nesta categoria</p>
        `;
        this.secondaryContainer.appendChild(emptyState);
    }
    
    navigateToItem(item) {
        if (item.url) {
            // Adicionar aos itens recentes (apenas se não for favorito ou recente)
            if (!item.isFavorite && !item.isRecent) {
                this.addToRecentItems({
                    ...item,
                    parentId: this.currentPrimaryItem.id
                });
            }
            
            // Fechar o menu antes de navegar
            this.closeMenu();
            
            // Simular navegação (em um app Rails real, seria window.location.href = item.url)
            console.log(`Navegando para: ${item.url}`);
            
            // Para demonstração, vamos mostrar um alert
            setTimeout(() => {
                alert(`Navegando para: ${item.title}\nURL: ${item.url}`);
            }, 300);
            
            // Em um app Rails real, descomente a linha abaixo:
            // window.location.href = item.url;
        }
    }
    
    // Método para atualizar os dados do menu dinamicamente
    updateMenuData(newMenuData) {
        this.menuData = newMenuData;
        this.renderPrimaryMenu();
        
        // Selecionar o primeiro item se houver dados
        if (this.menuData.length > 0) {
            this.selectPrimaryItem(this.menuData[0].id);
        } else {
            this.secondaryContainer.innerHTML = '';
            this.renderEmptyState();
        }
    }
    
    // Método para adicionar um novo item ao menu
    addMenuItem(parentId, newItem) {
        if (parentId) {
            // Adicionar como subitem
            const parentItem = this.menuData.find(item => item.id === parentId);
            if (parentItem) {
                if (!parentItem.children) {
                    parentItem.children = [];
                }
                parentItem.children.push(newItem);
                
                // Atualizar a visualização se este for o item ativo
                if (this.currentPrimaryItem && this.currentPrimaryItem.id === parentId) {
                    this.renderSecondaryMenu(parentItem);
                }
            }
        } else {
            // Adicionar como item principal
            this.menuData.push(newItem);
            this.renderPrimaryMenu();
        }
    }
    
    // Método para remover um item do menu
    removeMenuItem(itemId, parentId = null) {
        if (parentId) {
            // Remover subitem
            const parentItem = this.menuData.find(item => item.id === parentId);
            if (parentItem && parentItem.children) {
                parentItem.children = parentItem.children.filter(child => child.id !== itemId);
                
                // Atualizar a visualização se este for o item ativo
                if (this.currentPrimaryItem && this.currentPrimaryItem.id === parentId) {
                    this.renderSecondaryMenu(parentItem);
                }
            }
        } else {
            // Remover item principal
            this.menuData = this.menuData.filter(item => item.id !== itemId);
            this.renderPrimaryMenu();
            
            // Selecionar o primeiro item se ainda houver dados
            if (this.menuData.length > 0) {
                this.selectPrimaryItem(this.menuData[0].id);
            }
        }
    }
    
    // Método para alternar favorito
    toggleFavorite(item, parentId, buttonElement) {
        const itemWithParent = { ...item, parentId };
        
        if (this.isFavorite(item.id, parentId)) {
            this.removeFromFavorites(item.id, parentId);
            buttonElement.querySelector('i').classList.remove('favorited');
        } else {
            this.addToFavorites(itemWithParent);
            buttonElement.querySelector('i').classList.add('favorited');
        }
        
        // Atualizar a visualização se estivermos na seção de favoritos
        if (this.currentPrimaryItem && this.currentPrimaryItem.id === 'favorites') {
            this.renderSecondaryMenu(this.getFavoritesData());
        }
    }
    
    // Método para remover item de listas especiais (favoritos ou recentes)
    removeFromSpecialList(item, listType, buttonElement) {
        if (listType === 'favorites') {
            this.removeFromFavorites(item.id, item.parentId);
            // Atualizar a visualização da seção de favoritos
            if (this.currentPrimaryItem && this.currentPrimaryItem.id === 'favorites') {
                this.renderSecondaryMenu(this.getFavoritesData());
            }
        } else if (listType === 'recent') {
            this.removeFromRecentItems(item.id, item.parentId);
            // Atualizar a visualização da seção de recentes
            if (this.currentPrimaryItem && this.currentPrimaryItem.id === 'recent') {
                this.renderSecondaryMenu(this.getRecentItemsData());
            }
        }
    }
    
    // Método para remover item específico dos recentes
    removeFromRecentItems(itemId, parentId) {
        this.recentItems = this.recentItems.filter(recent => 
            !(recent.id === itemId && recent.parentId === parentId)
        );
        this.saveRecentItems();
    }
    
    // Métodos de pesquisa
    handleSearch(query) {
        const trimmedQuery = query.trim();
        
        // Mostrar/ocultar botão de limpar
        if (trimmedQuery.length > 0) {
            this.clearSearchBtn.style.display = 'flex';
        } else {
            this.clearSearchBtn.style.display = 'none';
        }
        
        if (trimmedQuery.length === 0) {
            this.showNormalMenu();
            return;
        }
        
        if (trimmedQuery.length < 2) {
            return; // Aguardar pelo menos 2 caracteres
        }
        
        const results = this.searchMenuItems(trimmedQuery);
        this.showSearchResults(results, trimmedQuery);
    }
    
    searchMenuItems(query) {
        const results = [];
        const queryLower = query.toLowerCase();
        
        this.menuData.forEach(primaryItem => {
            // Verificar item principal
            if (this.matchesSearch(primaryItem, queryLower)) {
                results.push({
                    ...primaryItem,
                    type: 'primary',
                    path: primaryItem.title
                });
            }
            
            // Verificar subitens
            if (primaryItem.children) {
                primaryItem.children.forEach(childItem => {
                    if (this.matchesSearch(childItem, queryLower)) {
                        results.push({
                            ...childItem,
                            type: 'secondary',
                            path: `${primaryItem.title} > ${childItem.title}`,
                            parentId: primaryItem.id,
                            parentTitle: primaryItem.title
                        });
                    }
                });
            }
        });
        
        return results;
    }
    
    matchesSearch(item, query) {
        return item.title.toLowerCase().includes(query) ||
               item.description.toLowerCase().includes(query);
    }
    
    showSearchResults(results, query) {
        // Ocultar menu normal e mostrar resultados
        this.menuContent.style.display = 'none';
        this.searchResults.classList.add('active');
        
        // Atualizar cabeçalho
        this.searchResultsHeader.textContent = `${results.length} resultado(s) para "${query}"`;
        
        // Limpar lista anterior
        this.searchResultsList.innerHTML = '';
        
        if (results.length === 0) {
            this.renderNoResults(query);
            return;
        }
        
        // Renderizar resultados
        results.forEach(result => {
            const resultElement = this.createSearchResultItem(result, query);
            this.searchResultsList.appendChild(resultElement);
        });
    }
    
    createSearchResultItem(result, query) {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        
        const icon = document.createElement('div');
        icon.className = 'search-result-icon';
        icon.innerHTML = `<i class="${result.icon}"></i>`;
        
        const content = document.createElement('div');
        content.className = 'search-result-content';
        
        const title = document.createElement('div');
        title.className = 'search-result-title';
        title.innerHTML = this.highlightText(result.title, query);
        
        const description = document.createElement('div');
        description.className = 'search-result-description';
        description.innerHTML = this.highlightText(result.description, query);
        
        const path = document.createElement('div');
        path.className = 'search-result-path';
        path.textContent = result.path;
        
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(path);
        
        resultItem.appendChild(icon);
        resultItem.appendChild(content);
        
        // Adicionar evento de clique
        resultItem.addEventListener('click', () => {
            if (result.type === 'secondary' && result.url) {
                this.navigateToItem(result);
            } else if (result.type === 'primary') {
                this.clearSearch();
                this.selectPrimaryItem(result.id);
            } else if (result.type === 'secondary') {
                this.clearSearch();
                this.selectPrimaryItem(result.parentId);
            }
        });
        
        return resultItem;
    }
    
    highlightText(text, query) {
        if (!query) return text;
        
        const regex = new RegExp(`(${this.escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }
    
    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    renderNoResults(query) {
        const noResults = document.createElement('div');
        noResults.className = 'search-no-results';
        noResults.innerHTML = `
            <i class="fas fa-search"></i>
            <p>Nenhum resultado encontrado para "<strong>${query}</strong>"</p>
        `;
        this.searchResultsList.appendChild(noResults);
    }
    
    showNormalMenu() {
        this.searchResults.classList.remove('active');
        this.menuContent.style.display = 'flex';
    }
    
    clearSearch() {
        this.searchInput.value = '';
        this.clearSearchBtn.style.display = 'none';
        this.showNormalMenu();
    }
    
    // Métodos para favoritos
    loadFavorites() {
        try {
            const saved = localStorage.getItem('menuFavorites');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }
    
    saveFavorites() {
        try {
            localStorage.setItem('menuFavorites', JSON.stringify(this.favorites));
        } catch (e) {
            console.warn('Não foi possível salvar favoritos no localStorage');
        }
    }
    
    addToFavorites(item) {
        const exists = this.favorites.find(fav => fav.id === item.id && fav.parentId === item.parentId);
        if (!exists) {
            this.favorites.push({
                id: item.id,
                parentId: item.parentId,
                title: item.title,
                description: item.description,
                icon: item.icon,
                url: item.url,
                addedAt: new Date().toISOString()
            });
            this.saveFavorites();
        }
    }
    
    removeFromFavorites(itemId, parentId) {
        this.favorites = this.favorites.filter(fav => 
            !(fav.id === itemId && fav.parentId === parentId)
        );
        this.saveFavorites();
    }
    
    isFavorite(itemId, parentId) {
        return this.favorites.some(fav => fav.id === itemId && fav.parentId === parentId);
    }
    
    // Métodos para itens recentes
    loadRecentItems() {
        try {
            const saved = localStorage.getItem('menuRecentItems');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }
    
    saveRecentItems() {
        try {
            localStorage.setItem('menuRecentItems', JSON.stringify(this.recentItems));
        } catch (e) {
            console.warn('Não foi possível salvar itens recentes no localStorage');
        }
    }
    
    addToRecentItems(item) {
        // Remover se já existe
        this.recentItems = this.recentItems.filter(recent => 
            !(recent.id === item.id && recent.parentId === item.parentId)
        );
        
        // Adicionar no início
        this.recentItems.unshift({
            id: item.id,
            parentId: item.parentId,
            title: item.title,
            description: item.description,
            icon: item.icon,
            url: item.url,
            accessedAt: new Date().toISOString()
        });
        
        // Manter apenas os últimos 10
        this.recentItems = this.recentItems.slice(0, 10);
        this.saveRecentItems();
    }
    
    // Método para criar item do menu principal
    createPrimaryMenuItem(item) {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.setAttribute('data-item-id', item.id);
        
        const icon = document.createElement('div');
        icon.className = 'menu-item-icon';
        icon.innerHTML = `<i class="${item.icon}"></i>`;
        
        const content = document.createElement('div');
        content.className = 'menu-item-content';
        
        const title = document.createElement('div');
        title.className = 'menu-item-title';
        title.textContent = item.title;
        
        const description = document.createElement('div');
        description.className = 'menu-item-description';
        description.textContent = item.description;
        
        content.appendChild(title);
        content.appendChild(description);
        
        menuItem.appendChild(icon);
        menuItem.appendChild(content);
        
        // Adicionar evento de clique
        menuItem.addEventListener('click', () => {
            this.selectPrimaryItem(item.id);
        });
        
        return menuItem;
    }
    
    // Métodos para renderizar favoritos e recentes
    getFavoritesData() {
        return {
            id: 'favorites',
            icon: 'fas fa-star',
            title: 'Favoritos',
            description: 'Seus itens favoritos do menu',
            children: this.favorites.map(fav => ({
                ...fav,
                isFavorite: true
            }))
        };
    }
    
    getRecentItemsData() {
        return {
            id: 'recent',
            icon: 'fas fa-clock',
            title: 'Usados Recentemente',
            description: 'Últimos 10 itens acessados',
            children: this.recentItems.map(recent => ({
                ...recent,
                isRecent: true
            }))
        };
    }
}

// Inicializar o menu quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    window.twoColumnMenu = new TwoColumnMenu();
});

// Exportar para uso em Rails (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TwoColumnMenu;
}
