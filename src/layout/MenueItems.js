import {
  Uil500px,
  UilBookReader,
  UilClipboardAlt,
  UilCreateDashboard,
  UilExchange,
  UilHeadphones,
  UilServer,
  UilShoppingCart,
  UilUsersAlt,
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { NavTitle } from './Style';
// import { changeLayoutMode } from '../redux/themeLayout/actionCreator';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  // const dispatch = useDispatch();

  const path = '';
  const pathName = window.location.pathname;
  const pathArray = pathName && pathName !== '/' ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  // const changeLayout = (mode) => {
  //   dispatch(changeLayoutMode(mode));
  // };

  // const darkmodeActivated = () => {
  //   document.body.classList.add('dark-mode');
  // };

  // const darkmodeDiactivated = () => {
  //   document.body.classList.remove('dark-mode');
  // };
  const items = [
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}/`}>
        {t('Dashboard')}
      </NavLink>,
      't-menu-dashboard',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/`}>
          <UilCreateDashboard />
        </NavLink>
      ),
    ),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Vendas')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(t('Vendas'), 'vendas', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/vendas/pedidos`}>
          {/*  /ecommerce/orders */}
          {t('Pedidos')}
        </NavLink>,
        'orsers',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/vendas/pedido-manual`}>
          {/* /estoque/pedido-manual */}
          {t('Pedido Manual')}
        </NavLink>,
        'Pedido Manual',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/vendas/devolucao`}>
          {/* /estoque/devolucao */}
          {t('Devolução')}
        </NavLink>,
        'Devolução',
        null,
      ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/orders/newOrders`}>
      //     {`${t('Criar')} ${t('Pedido')}`}
      //   </NavLink>,
      //   'criarPedido',
      //   null,
      // ),
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Compras')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(t('Compras'), 'compras', !topMenu && <UilExchange />, [
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/compras/solicitacoes`}>
      //     {t('Solicitações')}
      //   </NavLink>,
      //   'Solicitações',
      //   null,
      // ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/compras/pedidos`}>
          {t('Pedidos')}
        </NavLink>,
        'pedidos',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/compras/pedidosManuais`}>
          {t('Pedido Manual')}
        </NavLink>,
        'pedidosManuais',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/compras/fornecedores`}>
          {/* /compras/catalogo */}
          {`${t('Fornecedores')}`}
        </NavLink>,
        'catalogoFornecedores',
        null,
      ),
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Geral')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(t('Produtos'), 'produtos', !topMenu && <UilShoppingCart />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/produtos/painel`}>
          {t('Painel Analitico')}
        </NavLink>,
        'painel-analitico',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/produtos/meus-produtos`}>
          {/* /ecommerce/products/grid */}
          {t('Meus Produtos')}
        </NavLink>,
        'meus-produto',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/produtos/criar-kits`}>
          {t('Criar Kits')}
        </NavLink>,
        'criar-kits',
        null,
      ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/estoque/armazens/`}>
      //     {t('Armazém')}
      //   </NavLink>,
      //   'Armazém',
      // ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/estoque/locais-armazens`}>
      //     {t('Locais')} {t('dos')} {t('armazéns')}
      //   </NavLink>,
      //   'Locais dos armazéns',
      //   null,
      // ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/estoque/lotes`}>
      //     {t('Lotes')}
      //   </NavLink>,
      //   'lote',
      //   null,
      // ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/estoque/separacao`}>
      //     {t('Separação')}
      //   </NavLink>,
      //   'separacao',
      //   null,
      // ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/estoque/checkout`}>
      //     {t('Checkout')}
      //   </NavLink>,
      //   'checkout',
      //   null,
      // ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/estoque/etiquetas`}>
      //     {t('Etiquetas')}
      //   </NavLink>,
      //   'etiquetas',
      //   null,
      // ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/estoque/expedicao`}>
      //     {t('Expedição')}
      //   </NavLink>,
      //   'Expedição',
      //   null,
      // ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/estoque/recebimento`}>
      //     {t('Recebimento')}
      //   </NavLink>,
      //   'recebimento',
      //   null,
      // ),
    ]),
    getItem(`${t('Fiscal')}`, 'fiscal', !topMenu && <Uil500px />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/fiscal/notas-saida`}>
          {/* /fiscal/faturamento */}
          {`${t('Notas de saída')}`}
        </NavLink>,
        'notas-saida',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/fiscal/notas-entradas`}>
          {`${t('Nodas de entradas')}`}
        </NavLink>,
        'notas-entradas',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/fiscal/gerenciador-Nfe`}>
          {`${t('gerenciador de NFe')}`}
        </NavLink>,
        'gerenciador-nfe',
        null,
      ),
    ]),
    getItem(`${t('Financeiro')}`, 'financeiro', !topMenu && <Uil500px />, [
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/financeiro/geral`}>
      //     {t('geral')}
      //   </NavLink>,
      //   't-menu-finances',
      //   !topMenu && (
      //     <NavLink className="menuItem-iocn" to={`${path}/financeiro/geral`}>
      //       <UilBookOpen />
      //     </NavLink>
      //   ),
      // ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/financeiro/painel`}>
          {t('painel')}
        </NavLink>,
        'painel',
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/financeiro/lancamentos`}>
          {t('lancamentos')}
        </NavLink>,
        'Lançamentos',
      ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/financeiro/saidas`}>
      //     {t('saidas')}
      //   </NavLink>,
      //   'saidas',
      // ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/financeiro/fluxo`}>
      //     {`${t('Fluxo')} ${t('de')} ${t('Caixa')}`}
      //   </NavLink>,
      //   't-menu-saidas',
      //   !topMenu && (
      //     <NavLink className="menuItem-iocn" to={`${path}/financeiro/fluxo`}>
      //       <UilArrowGrowth />
      //     </NavLink>
      //   ),
      // ),
    ]),
    // getItem(
    //   <NavLink onClick={toggleCollapsed} to={`${path}/assinaturas/assinaturasOpen`}>
    //     {t('assinaturas')}
    //   </NavLink>,
    //   't-menu-assinaturas',
    //   !topMenu && (
    //     <NavLink className="menuItem-iocn" to={`${path}/assinaturas/assinaturasOpen`}>
    //       <UilIcons />
    //     </NavLink>
    //   ),
    // ),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Aprendizado')}</NavTitle>,
      'app-title',
      null,
      null,
      'group',
    ),
    getItem(`${t('Aprendizado')}`, 'aprendizado', !topMenu && <UilBookReader />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/aprendizado/video-aulas`}>
          {/* /app/course */}
          {t('Video Aulas')}
        </NavLink>,
        'video-aulas',
        null,
      ),
    ]),
    getItem(
      !topMenu && <NavTitle className="ninjadash-sidebar-nav-title">{t('Outros')}</NavTitle>,
      'page-title',
      null,
      null,
      'group',
    ),
    getItem(t('Configurações'), 'configuracoes', !topMenu && <UilServer />, [
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/others/perfilVini`}>
      //     {`${t('Meu')} ${t('Perfil')}`}
      //   </NavLink>,
      //   'Perfil',
      //   null,
      // ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/configuracoes/minha-assinatura`}>
          {/* /others/mySubscriptions */}
          {`${t('Minha Assinatura')}`}
        </NavLink>,
        'minha-assinatura',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/configuracoes/integracoes`}>
          {/* /others/integracoes */}
          {t('Integrações')}
        </NavLink>,
        'integracoes',
        null,
      ),
    ]),
    getItem(t('Usuários'), 'Usuários', !topMenu && <UilUsersAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/usuarios/lista`}>
          {t('Usuários')}
        </NavLink>,
        'Usuários',
        null,
      ),
      // getItem(
      //   <NavLink onClick={toggleCollapsed} to={`${path}/usuarios/meu-cadastro`}>
      //     {t('Meu Cadastro')}
      //   </NavLink>,
      //   'meu-cadastro',
      //   null,
      // ),
    ]),
    getItem(t('Suporte'), 'suporte', !topMenu && <UilHeadphones />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/suporte/chamados`}>
          {/* /app/support/tickets */}
          {t('Chamados')}
        </NavLink>,
        'chamados',
        null,
      ),
    ]),
    getItem(t('Ferramentas'), 'ferramentas', !topMenu && <UilClipboardAlt />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ferramentas/encurtador-de-link`}>
          {/* /app/task/all */}
          {`${t('Encurtador de Link')}`}
        </NavLink>,
        'Encurtador',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ferramentas/gerador-de-qrcode`}>
          {/* /email/inbox */}
          {`${t('Gerador de QRCode')}`}
        </NavLink>,
        'gerador-de-qrcode',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ferramentas/tendencias`}>
          {`${t('Tendências')}`}
        </NavLink>,
        'tendencias',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/ferramentas/gerador-de-ean`}>
          {/* /outros/ean */}
          {`${t('Gerador de Ean')}`}
        </NavLink>,
        'gerador-de-ean',
        null,
      ),
    ]),
    /* getItem(t('Relatorios'), 'relatorios', !topMenu && <UilExchange />, [
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/relatorios/compras`}>
          {`${t('Relatórios')} ${t('de')} ${t('Compras')}`}
        </NavLink>,
        'relatorioCompras',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/relatorios/fiscal`}>
          {`${t('Relatórios')} ${t('de')} ${t('Fiscal')}`}
        </NavLink>,
        'relatorioFiscal',
        null,
      ),
      getItem(
        <NavLink onClick={toggleCollapsed} to={`${path}/relatorios/vendas`}>
          {`${t('Relatórios')} ${t('de')} ${t('Vendas')}`}
        </NavLink>,
        'relatorioVendas',
        null,
      ),
    ]), */
  ];
  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
