/* @ds-bundle: {"format":4,"namespace":"AtomoDesignSystem_30859f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"EmptyState","sourcePath":"components/data-display/EmptyState.jsx"},{"name":"KpiCard","sourcePath":"components/data-display/KpiCard.jsx"},{"name":"Pagination","sourcePath":"components/data-display/Pagination.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Loader","sourcePath":"components/feedback/Loader.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioCard","sourcePath":"components/forms/RadioCard.jsx"},{"name":"RadioCardGroup","sourcePath":"components/forms/RadioCard.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"ATOMO_THEME","sourcePath":"components/foundations/AtomoProvider.jsx"},{"name":"MissingAntd","sourcePath":"components/foundations/AtomoProvider.jsx"},{"name":"Themed","sourcePath":"components/foundations/AtomoProvider.jsx"},{"name":"AtomoProvider","sourcePath":"components/foundations/AtomoProvider.jsx"},{"name":"Icon","sourcePath":"components/foundations/Icon.jsx"},{"name":"Collapse","sourcePath":"components/navigation/Collapse.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dropdown","sourcePath":"components/overlays/Dropdown.jsx"},{"name":"Tooltip","sourcePath":"components/overlays/Tooltip.jsx"}],"sourceHashes":{"atomo.theme.js":"e9ec90614c21","components/actions/Button.jsx":"f6e88187b574","components/data-display/Card.jsx":"c87d8ca11f21","components/data-display/EmptyState.jsx":"435fff6eb1ef","components/data-display/KpiCard.jsx":"f8bbf3950080","components/data-display/Pagination.jsx":"c23c8e837a91","components/data-display/Table.jsx":"b5044e842d62","components/data-display/Tag.jsx":"efd6ad994837","components/feedback/Loader.jsx":"85675c0bca01","components/feedback/Modal.jsx":"b691fab23f9c","components/forms/Checkbox.jsx":"e59c641c16a7","components/forms/DatePicker.jsx":"95d976e076ed","components/forms/FormField.jsx":"e463d611d1d8","components/forms/Input.jsx":"3f85e9e74fc9","components/forms/Radio.jsx":"aec7556927e3","components/forms/RadioCard.jsx":"81fb7eabad5f","components/forms/SearchInput.jsx":"14f39f26c32a","components/forms/Select.jsx":"b9dcd5950bd5","components/foundations/AtomoProvider.jsx":"be065e8d71c3","components/foundations/Icon.jsx":"3428e3ab3cab","components/navigation/Collapse.jsx":"590911abb6a2","components/navigation/Sidebar.jsx":"1e850729e96c","components/navigation/Tabs.jsx":"2040e9020f27","components/overlays/Dropdown.jsx":"b57bf8363e66","components/overlays/Tooltip.jsx":"8029820e170d"},"inlinedExternals":[],"unexposedExports":[{"name":"ensureKeyframes","sourcePath":"components/foundations/Icon.jsx"},{"name":"ensureStyles","sourcePath":"components/foundations/AtomoProvider.jsx"},{"name":"themeFor","sourcePath":"components/foundations/AtomoProvider.jsx"},{"name":"useAntd","sourcePath":"components/foundations/AtomoProvider.jsx"}]} */

(() => {

const __ds_ns = (window.AtomoDesignSystem_30859f = window.AtomoDesignSystem_30859f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// atomo.theme.js
try { (() => {
/**
 * Atomo — Ant Design theme.
 * Drop this next to your app and pass it to ConfigProvider:
 *
 *   import { ConfigProvider } from 'antd';
 *   import esES from 'antd/locale/es_ES';
 *   import { ATOMO_THEME } from './atomo.theme';
 *   <ConfigProvider theme={ATOMO_THEME} locale={esES}>…</ConfigProvider>
 *
 * This file is a copyable production artifact: it declares ATOMO_THEME and
 * publishes it via module.exports / window. Add `export` when you drop it into
 * an ESM app. The bundled twin lives in components/foundations/AtomoProvider.jsx.
 *
 * Requires antd@5.24.6 or newer (Button `variant`/`color`, Card `variant`,
 * Collapse/Tabs `items`). Values mirror tokens/ in this design system — that CSS
 * remains the human-readable reference; this object is what antd renders from.
 * Keep the two in sync: change a token here and in tokens/ together.
 */
const ATOMO_THEME = {
  token: {
    colorPrimary: '#1677ff',
    colorInfo: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorLink: '#1677ff',
    colorText: 'rgba(0,0,0,.88)',
    colorTextSecondary: 'rgba(0,0,0,.65)',
    colorTextTertiary: 'rgba(0,0,0,.45)',
    colorTextQuaternary: 'rgba(0,0,0,.25)',
    colorBgLayout: '#f0f2f5',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorBorder: '#d9d9d9',
    colorBorderSecondary: '#f0f0f0',
    colorFillAlter: '#fafafa',
    fontFamily: "'Inter','Inter var',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    fontSize: 14,
    fontSizeLG: 14,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    lineHeight: 1.5714285714285714,
    // The two-size rule: 32px default, 28px compact. controlHeightLG is pinned to 32
    // so a stray size="large" cannot introduce a third height.
    controlHeight: 32,
    controlHeightSM: 28,
    controlHeightLG: 32,
    controlHeightXS: 24,
    borderRadius: 6,
    borderRadiusXS: 2,
    borderRadiusSM: 4,
    borderRadiusLG: 8,
    sizeUnit: 4,
    sizeStep: 4,
    padding: 16,
    margin: 16,
    motionDurationFast: '0.08s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',
    motionEaseOut: 'cubic-bezier(.215,.61,.355,1)',
    boxShadow: '0 1px 2px rgba(0,0,0,.03),0 2px 6px rgba(0,0,0,.04)',
    boxShadowSecondary: '0 4px 12px rgba(0,0,0,.08),0 1px 3px rgba(0,0,0,.04)',
    wireframe: false
  },
  components: {
    Button: {
      borderRadius: 4,
      borderRadiusSM: 4,
      paddingInline: 12,
      paddingInlineSM: 12,
      fontWeight: 500,
      contentFontSize: 14,
      contentFontSizeSM: 14,
      primaryShadow: 'none',
      defaultShadow: 'none',
      dangerShadow: 'none'
    },
    Tag: {
      borderRadiusSM: 4,
      defaultBg: '#fafafa'
    },
    Input: {
      borderRadius: 6,
      borderRadiusSM: 6,
      paddingInline: 12,
      paddingInlineSM: 8,
      activeShadow: '0 0 0 2px rgba(22,119,255,.16)',
      errorActiveShadow: '0 0 0 2px rgba(245,34,45,.16)',
      warningActiveShadow: '0 0 0 2px rgba(250,173,20,.16)'
    },
    InputNumber: {
      borderRadius: 6,
      borderRadiusSM: 6
    },
    Select: {
      borderRadius: 6,
      borderRadiusSM: 6,
      optionSelectedBg: '#e6f4ff',
      optionSelectedFontWeight: 500,
      optionHeight: 32
    },
    DatePicker: {
      borderRadius: 6,
      borderRadiusSM: 6,
      cellActiveWithRangeBg: '#e6f4ff',
      activeShadow: '0 0 0 2px rgba(22,119,255,.16)'
    },
    Table: {
      headerBg: '#fafafa',
      headerColor: 'rgba(0,0,0,.65)',
      headerSplitColor: 'transparent',
      headerBorderRadius: 0,
      rowHoverBg: '#f5f5f5',
      rowSelectedBg: '#e6f4ff',
      rowSelectedHoverBg: '#bae0ff',
      borderColor: '#f0f0f0',
      footerBg: '#fafafa',
      cellPaddingBlock: 15,
      cellPaddingInline: 16,
      cellPaddingBlockSM: 9,
      cellPaddingInlineSM: 12,
      cellFontSize: 14,
      cellFontSizeSM: 14
    },
    Card: {
      borderRadiusLG: 8,
      headerHeight: 52,
      headerFontSize: 16,
      headerBg: 'transparent',
      paddingLG: 20
    },
    Modal: {
      borderRadiusLG: 8,
      titleFontSize: 16
    },
    Tabs: {
      inkBarColor: '#1677ff',
      itemSelectedColor: '#1677ff',
      itemHoverColor: '#4096ff',
      titleFontSize: 14,
      horizontalItemPadding: '8px 0',
      horizontalItemGutter: 24
    },
    Collapse: {
      borderRadiusLG: 8,
      headerBg: '#fafafa',
      headerPadding: '10px 16px',
      contentPadding: 16
    },
    Checkbox: {
      borderRadiusSM: 2
    },
    Radio: {
      dotSize: 8
    },
    Pagination: {
      itemSize: 32,
      itemSizeSM: 28
    },
    Tooltip: {
      borderRadius: 6
    },
    Dropdown: {
      borderRadiusLG: 8,
      paddingBlock: 4
    },
    Segmented: {
      borderRadius: 6,
      itemSelectedBg: '#ffffff',
      trackBg: '#f5f5f5'
    },
    Form: {
      labelColor: 'rgba(0,0,0,.65)',
      labelFontSize: 14,
      verticalLabelPadding: '0 0 4px',
      itemMarginBottom: 0,
      labelRequiredMarkColor: '#f5222d'
    },
    Popover: {
      borderRadiusLG: 8
    },
    Message: {
      borderRadiusLG: 8
    }
  }
};
if (typeof module !== 'undefined' && module.exports) module.exports = {
  ATOMO_THEME
};
if (typeof window !== 'undefined') window.ATOMO_THEME = ATOMO_THEME;
})(); } catch (e) { __ds_ns.__errors.push({ path: "atomo.theme.js", error: String((e && e.message) || e) }); }

// components/feedback/Loader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RESERVED SLOT. Atomo's loading indicator has not been designed yet — the brief keeps
 * the space and defers the design. Until then this renders the neutral placeholders below,
 * which are intentionally unbranded: a 2px ring, a text skeleton and a bar.
 * Do not build a custom spinner elsewhere; extend this file when the real design lands.
 */
function Loader({
  variant = 'spinner',
  size = 20,
  label,
  inline = false,
  style,
  ...rest
}) {
  const common = {
    display: inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: inline ? 'flex-start' : 'center',
    gap: 'var(--space-2)',
    ...style
  };
  if (variant === 'skeleton') return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%',
      ...style
    }
  }), [70, 100, 45].map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 12,
      width: w + '%',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-hover)'
    }
  })));
  if (variant === 'bar') return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      height: 2,
      width: '100%',
      overflow: 'hidden',
      background: 'var(--surface-hover)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '40%',
      background: 'var(--color-primary)',
      animation: 'atomo-shimmer 1.1s var(--ease-in-out) infinite'
    }
  }));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: common
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '2px solid var(--color-primary)',
      borderTopColor: 'transparent',
      animation: 'atomo-spin .7s linear infinite'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Loader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Loader.jsx", error: String((e && e.message) || e) }); }

// components/foundations/AtomoProvider.jsx
try { (() => {
/**
 * The ConfigProvider theme that turns real Ant Design into Atomo.
 * Values mirror tokens/ — that CSS stays the design reference, this object is
 * what antd renders from. `atomo.theme.js` at the project root is the same
 * object in copyable form for production code; keep the two in sync.
 */
const ATOMO_THEME = {
  token: {
    colorPrimary: '#1677ff',
    colorInfo: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#f5222d',
    colorLink: '#1677ff',
    colorText: 'rgba(0,0,0,.88)',
    colorTextSecondary: 'rgba(0,0,0,.65)',
    colorTextTertiary: 'rgba(0,0,0,.45)',
    colorTextQuaternary: 'rgba(0,0,0,.25)',
    colorBgLayout: '#f0f2f5',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorBorder: '#d9d9d9',
    colorBorderSecondary: '#f0f0f0',
    colorFillAlter: '#fafafa',
    fontFamily: "'Inter','Inter var',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    fontSize: 14,
    fontSizeLG: 14,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    lineHeight: 1.5714285714285714,
    controlHeight: 32,
    controlHeightSM: 28,
    controlHeightLG: 32,
    controlHeightXS: 24,
    borderRadius: 6,
    borderRadiusXS: 2,
    borderRadiusSM: 4,
    borderRadiusLG: 8,
    sizeUnit: 4,
    sizeStep: 4,
    padding: 16,
    margin: 16,
    motionDurationFast: '0.08s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',
    motionEaseOut: 'cubic-bezier(.215,.61,.355,1)',
    boxShadow: '0 1px 2px rgba(0,0,0,.03),0 2px 6px rgba(0,0,0,.04)',
    boxShadowSecondary: '0 4px 12px rgba(0,0,0,.08),0 1px 3px rgba(0,0,0,.04)',
    wireframe: false
  },
  components: {
    Button: {
      borderRadius: 4,
      borderRadiusSM: 4,
      paddingInline: 12,
      paddingInlineSM: 12,
      fontWeight: 500,
      contentFontSize: 14,
      contentFontSizeSM: 14,
      primaryShadow: 'none',
      defaultShadow: 'none',
      dangerShadow: 'none'
    },
    Tag: {
      borderRadiusSM: 4,
      defaultBg: '#fafafa'
    },
    Input: {
      borderRadius: 6,
      borderRadiusSM: 6,
      paddingInline: 12,
      paddingInlineSM: 8,
      activeShadow: '0 0 0 2px rgba(22,119,255,.16)',
      errorActiveShadow: '0 0 0 2px rgba(245,34,45,.16)',
      warningActiveShadow: '0 0 0 2px rgba(250,173,20,.16)'
    },
    InputNumber: {
      borderRadius: 6,
      borderRadiusSM: 6
    },
    Select: {
      borderRadius: 6,
      borderRadiusSM: 6,
      optionSelectedBg: '#e6f4ff',
      optionSelectedFontWeight: 500,
      optionHeight: 32
    },
    DatePicker: {
      borderRadius: 6,
      borderRadiusSM: 6,
      cellActiveWithRangeBg: '#e6f4ff',
      activeShadow: '0 0 0 2px rgba(22,119,255,.16)'
    },
    Table: {
      headerBg: '#fafafa',
      headerColor: 'rgba(0,0,0,.65)',
      headerSplitColor: 'transparent',
      headerBorderRadius: 0,
      rowHoverBg: '#f5f5f5',
      rowSelectedBg: '#e6f4ff',
      rowSelectedHoverBg: '#bae0ff',
      borderColor: '#f0f0f0',
      footerBg: '#fafafa',
      cellPaddingBlock: 15,
      cellPaddingInline: 16,
      cellPaddingBlockSM: 9,
      cellPaddingInlineSM: 12,
      cellFontSize: 14,
      cellFontSizeSM: 14
    },
    Card: {
      borderRadiusLG: 8,
      headerHeight: 52,
      headerFontSize: 16,
      headerBg: 'transparent',
      paddingLG: 20
    },
    Modal: {
      borderRadiusLG: 8,
      titleFontSize: 16
    },
    Tabs: {
      inkBarColor: '#1677ff',
      itemSelectedColor: '#1677ff',
      itemHoverColor: '#4096ff',
      titleFontSize: 14,
      horizontalItemPadding: '8px 0',
      horizontalItemGutter: 24
    },
    Collapse: {
      borderRadiusLG: 8,
      headerBg: '#fafafa',
      headerPadding: '10px 16px',
      contentPadding: 16
    },
    Checkbox: {
      borderRadiusSM: 2
    },
    Radio: {
      dotSize: 8
    },
    Pagination: {
      itemSize: 32,
      itemSizeSM: 28
    },
    Tooltip: {
      borderRadius: 6
    },
    Dropdown: {
      borderRadiusLG: 8,
      paddingBlock: 4
    },
    Segmented: {
      borderRadius: 6,
      itemSelectedBg: '#ffffff',
      trackBg: '#f5f5f5'
    },
    Form: {
      labelColor: 'rgba(0,0,0,.65)',
      labelFontSize: 14,
      verticalLabelPadding: '0 0 4px',
      itemMarginBottom: 0,
      labelRequiredMarkColor: '#f5222d'
    },
    Popover: {
      borderRadiusLG: 8
    },
    Message: {
      borderRadiusLG: 8
    }
  }
};
const TONES = {
  success: '#52c41a'
};
const cache = {};
/** ATOMO_THEME with colorPrimary swapped for a semantic tone. */
function themeFor(tone) {
  if (!tone || !TONES[tone]) return ATOMO_THEME;
  if (!cache[tone]) cache[tone] = {
    token: {
      ...ATOMO_THEME.token,
      colorPrimary: TONES[tone]
    },
    components: ATOMO_THEME.components
  };
  return cache[tone];
}

/** Real Ant Design off window, or null when the CDN script has not loaded. */
function useAntd() {
  return typeof window !== 'undefined' && window.antd || null;
}

/** Visible, non-crashing fallback when antd is missing. */
function MissingAntd({
  name = 'componente'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 8px',
      border: '1px dashed var(--color-error-border,#ffa39e)',
      borderRadius: 4,
      background: 'var(--color-error-bg,#fff1f0)',
      font: 'var(--type-caption)',
      color: 'var(--color-error,#f5222d)'
    }
  }, "Ant Design no est\xE1 cargado \u2014 ", name);
}
const SID = 'atomo-antd-layer';
/** Injects the handful of rules antd's theme tokens cannot express. Once per document. */
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(SID)) return;
  const s = document.createElement('style');
  s.id = SID;
  s.textContent = ['.atomo-num{font-variant-numeric:tabular-nums}', '.ant-table-tbody>tr.atomo-odd>td.ant-table-cell{background:#fafafa}', '.atomo-sep>.ant-collapse-item{margin-bottom:8px;border:1px solid #f0f0f0;border-radius:8px;overflow:hidden}', '.atomo-sep>.ant-collapse-item:last-child{margin-bottom:0}', '.ant-table-thead>tr>th{letter-spacing:.2px;font-weight:600}', '.ant-btn>span{white-space:nowrap}'].join('');
  document.head.appendChild(s);
}

/** Internal: every Atomo wrapper renders inside this so the theme applies with or without a host provider. */
function Themed({
  tone,
  theme,
  children
}) {
  const A = useAntd();
  if (!A) return /*#__PURE__*/React.createElement(MissingAntd, null);
  ensureStyles();
  return /*#__PURE__*/React.createElement(A.ConfigProvider, {
    theme: theme || themeFor(tone)
  }, children);
}

/**
 * Wrap an app (or a card) to apply the Atomo theme to every real Ant Design
 * component inside it. Individual Atomo wrappers already self-theme, so this is
 * only needed when you use antd components directly.
 */
function AtomoProvider({
  tone,
  theme,
  children
}) {
  return /*#__PURE__*/React.createElement(Themed, {
    tone: tone,
    theme: theme
  }, children);
}
Object.assign(__ds_scope, { ATOMO_THEME, themeFor, useAntd, MissingAntd, ensureStyles, Themed, AtomoProvider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/AtomoProvider.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Real antd Card — 8px radius, hairline border, 20px body, optional 52px header. */
function Card({
  title,
  subtitle,
  extra,
  footer,
  padding,
  bordered = true,
  hoverable,
  bodyStyle,
  children,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Card"
  });
  const head = title !== undefined && title !== null ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBlock: subtitle ? 10 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-section-title)',
      color: 'var(--text-heading)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      fontWeight: 400
    }
  }, subtitle)) : undefined;
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Card, _extends({
    title: head,
    extra: extra ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, extra) : undefined,
    variant: bordered ? 'outlined' : 'borderless',
    hoverable: hoverable,
    styles: {
      body: {
        padding: padding === undefined ? 20 : padding,
        ...bodyStyle
      }
    },
    actions: footer ? [/*#__PURE__*/React.createElement("div", {
      key: "f",
      style: {
        padding: '0 4px',
        textAlign: 'left',
        font: 'var(--type-caption)',
        color: 'var(--text-secondary)'
      }
    }, footer)] : undefined,
    style: {
      borderRadius: 8,
      ...style
    }
  }, rest), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Pagination.jsx
try { (() => {
const n = v => Number(v || 0).toLocaleString('es-MX');

/** Real antd Pagination with the es-MX record summary. */
function Pagination({
  current = 1,
  pageSize = 20,
  total = 0,
  onChange,
  pageSizeOptions,
  showSizeChanger = false,
  showTotal = true,
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Pagination"
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Pagination, {
    current: current,
    pageSize: pageSize,
    total: total,
    onChange: onChange,
    pageSizeOptions: pageSizeOptions,
    showSizeChanger: showSizeChanger,
    showTotal: showTotal ? (t, r) => n(r[0]) + '–' + n(r[1]) + ' de ' + n(t) + ' registros' : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Real antd Checkbox. */
function Checkbox({
  checked,
  defaultChecked,
  indeterminate,
  disabled,
  onChange,
  size = 'default',
  children,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Checkbox"
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Checkbox, _extends({
    checked: checked,
    defaultChecked: defaultChecked,
    indeterminate: indeterminate,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      font: 'var(--type-body)',
      ...style
    }
  }, rest), children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
const COLOR = {
  error: 'var(--color-error)',
  warning: 'var(--color-warning)',
  help: 'var(--text-tertiary)'
};

/**
 * Real antd Form.Item — label, required mark and validation status.
 * The message line is Atomo's own: antd's help motion needs a Form instance to
 * drive it, and a standalone specimen would leave it collapsed at height 0.
 */
function FormField({
  label,
  required,
  help,
  error,
  warning,
  htmlFor,
  layout = 'vertical',
  labelWidth = 140,
  extra,
  children,
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Form.Item"
  });
  const status = error ? 'error' : warning ? 'warning' : undefined;
  const msg = error || warning || help;
  const tone = error ? 'error' : warning ? 'warning' : 'help';
  const lbl = extra ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      width: '100%',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, extra)) : label;
  const horizontal = layout === 'horizontal';
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement(A.Form, {
    component: false,
    layout: horizontal ? 'horizontal' : 'vertical',
    colon: false,
    labelCol: horizontal ? {
      flex: '0 0 ' + labelWidth + 'px'
    } : undefined,
    wrapperCol: horizontal ? {
      flex: '1 1 auto',
      style: {
        minWidth: 0
      }
    } : undefined
  }, /*#__PURE__*/React.createElement(A.Form.Item, {
    label: lbl,
    required: required,
    htmlFor: htmlFor,
    validateStatus: status,
    style: {
      marginBottom: 0
    }
  }, children)), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      marginLeft: horizontal ? labelWidth : 0,
      font: 'var(--type-caption)',
      color: COLOR[tone]
    }
  }, msg)));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Real antd Radio. Always inside a RadioGroup. */
function Radio({
  checked,
  disabled,
  value,
  onChange,
  children,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Radio"
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Radio, _extends({
    checked: checked,
    disabled: disabled,
    value: value,
    onChange: e => onChange && onChange(e.target.value !== undefined ? e.target.value : value),
    style: {
      font: 'var(--type-body)',
      ...style
    }
  }, rest), children));
}

/** Real antd Radio.Group — owns the selected value. */
function RadioGroup({
  value,
  defaultValue,
  onChange,
  options,
  layout = 'inline',
  disabled,
  children,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Radio.Group"
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Radio.Group, _extends({
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    options: options,
    style: {
      display: 'flex',
      flexDirection: layout === 'stack' ? 'column' : 'row',
      flexWrap: 'wrap',
      gap: layout === 'stack' ? 8 : 16,
      ...style
    }
  }, rest), children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/foundations/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.469.0/icons/';
const KF = 'atomo-keyframes';

/** Injects the system's four keyframes once. Imported by every component that animates. */
function ensureKeyframes() {
  if (typeof document === 'undefined' || document.getElementById(KF)) return;
  const s = document.createElement('style');
  s.id = KF;
  s.textContent = '@keyframes atomo-spin{to{transform:rotate(360deg)}}@keyframes atomo-fade-in{from{opacity:0}to{opacity:1}}@keyframes atomo-zoom-in{from{opacity:0;transform:scale(.97) translateY(-6px)}to{opacity:1;transform:none}}@keyframes atomo-shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(350%)}}';
  document.head.appendChild(s);
}
ensureKeyframes();

/** Monochrome icon. Renders a Lucide glyph as a CSS mask so it always inherits currentColor. */
function Icon({
  name = 'circle',
  size = 16,
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const url = BASE + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: '0 0 auto',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      verticalAlign: '-0.15em',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { ensureKeyframes, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundations/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  solid: 'solid',
  outline: 'outlined',
  dashed: 'dashed',
  filled: 'filled',
  text: 'text',
  link: 'link'
};
const COLOR = {
  primary: 'primary',
  neutral: 'default',
  danger: 'danger',
  success: 'primary'
};
const g = (i, s) => typeof i === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
  name: i,
  size: s
}) : i;

/** Real antd Button. Atomo fixes the two sizes, 4px radius, 12px padding and shadowless fills. */
function Button({
  variant = 'solid',
  tone = 'primary',
  size = 'default',
  icon,
  iconRight,
  iconOnly = false,
  loading = false,
  disabled,
  block,
  htmlType = 'button',
  children,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Button"
  });
  const gs = size === 'compact' ? 14 : 16;
  const label = iconOnly ? null : children;
  const body = iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, label, g(iconRight, gs)) : label;
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, {
    tone: tone === 'success' ? 'success' : undefined
  }, /*#__PURE__*/React.createElement(A.Button, _extends({
    variant: VARIANT[variant] || 'solid',
    color: COLOR[tone] || 'primary',
    size: size === 'compact' ? 'small' : 'middle',
    icon: g(icon, gs),
    loading: loading,
    disabled: disabled,
    block: block,
    htmlType: htmlType,
    style: style
  }, rest), body));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/EmptyState.jsx
try { (() => {
const PRESETS = {
  empty: ['inbox', 'Sin registros', 'Aún no hay información para mostrar.'],
  search: ['search', 'Sin resultados', 'Revisa la escritura o busca con menos palabras.'],
  filtered: ['filter-x', 'Ningún registro coincide', 'Limpia los filtros para ver todo.'],
  error: ['triangle-alert', 'No se pudo cargar', 'Vuelve a intentarlo en unos segundos.'],
  permission: ['lock', 'Sin permisos', 'Solicita acceso al administrador del módulo.']
};

/** Real antd Empty with Atomo's five presets: icon tile, fact, way out. */
function EmptyState({
  variant = 'empty',
  icon,
  title,
  description,
  action,
  compact = false,
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Empty"
  });
  const p = PRESETS[variant] || PRESETS.empty;
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: compact ? '24px 16px' : '48px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(A.Empty, {
    imageStyle: {
      height: 48,
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 16
    },
    image: /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'var(--surface-sunken)',
        display: 'inline-grid',
        placeItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon || p[0],
      size: 20,
      color: "var(--text-tertiary)"
    })),
    description: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        font: 'var(--type-body)',
        fontWeight: 500,
        color: 'var(--text-heading)'
      }
    }, title || p[1]), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: 4,
        font: 'var(--type-caption)',
        color: 'var(--text-tertiary)'
      }
    }, description === undefined ? p[2] : description))
  }, action)));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data-display/KpiCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sparkline({
  points = [],
  color = 'var(--color-primary)',
  width = 88,
  height = 28
}) {
  if (!points.length) return null;
  const max = Math.max(...points),
    min = Math.min(...points),
    span = max - min || 1;
  const step = width / (points.length - 1 || 1);
  const d = points.map((p, i) => (i ? 'L' : 'M') + (i * step).toFixed(1) + ' ' + (height - (p - min) / span * (height - 4) - 2).toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    style: {
      display: 'block',
      flex: '0 0 auto'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/** Dashboard indicator. Atomo's own component — Ant Design has no KPI card. */
function KpiCard({
  label,
  value,
  unit,
  delta,
  deltaLabel,
  trend,
  icon,
  tone = 'primary',
  footer,
  loading = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    primary: 'var(--color-primary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
    cyan: 'var(--cyan-6)',
    purple: 'var(--purple-6)',
    neutral: 'var(--gray-8)'
  };
  const accent = tones[tone] || tones.primary;
  const up = delta !== undefined && delta >= 0;
  const deltaColor = delta === undefined ? 'var(--text-tertiary)' : up ? 'var(--color-success-text)' : 'var(--color-error-text)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: 'var(--padding-card)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-split)',
      borderRadius: 'var(--radius-card)',
      boxShadow: onClick && hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'var(--transition-control)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineStart: 0,
      top: 0,
      bottom: 0,
      width: 3,
      background: accent,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-secondary)',
      textTransform: 'none'
    }
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-hover)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: accent
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      minWidth: 0
    }
  }, loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 96,
      height: 28,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-hover)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--font-sans)',
      fontSize: 28,
      lineHeight: '34px',
      fontWeight: 600,
      letterSpacing: '-.4px',
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), unit && !loading && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, unit)), trend && trend.length > 0 && /*#__PURE__*/React.createElement(Sparkline, {
    points: trend,
    color: accent
  })), (delta !== undefined || footer) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      paddingTop: 'var(--space-2)',
      borderTop: '1px solid var(--border-split)'
    }
  }, delta !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      font: 'var(--type-caption)',
      fontWeight: 500,
      color: deltaColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: up ? 'trending-up' : 'trending-down',
    size: 13
  }), up ? '+' : '', delta, "%"), (deltaLabel || footer) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, deltaLabel || footer)));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
const n = v => Number(v || 0).toLocaleString('es-MX');

/** Real antd Table. Atomo adds the toolbar row, the bulk-action bar and the es-MX pagination summary. */
function Table({
  columns = [],
  dataSource = [],
  rowKey = 'id',
  size = 'medium',
  bordered = false,
  striped = false,
  loading = false,
  rowSelection,
  onRow,
  pagination,
  toolbar,
  title,
  footer,
  sticky = false,
  scrollY,
  emptyState,
  showHeader = true,
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Table"
  });
  const cols = columns.map((c, i) => {
    const o = {
      title: c.title,
      dataIndex: c.dataIndex,
      key: c.key || c.dataIndex || i,
      width: c.width,
      align: c.align,
      ellipsis: c.ellipsis,
      render: c.render
    };
    if (c.align === 'right') o.className = 'atomo-num';
    if (c.sorter) {
      const get = c.sortValue || (r => r[c.dataIndex]);
      o.sorter = (a, b) => {
        const x = get(a),
          y = get(b);
        return typeof x === 'number' && typeof y === 'number' ? x - y : String(x ?? '').localeCompare(String(y ?? ''), 'es-MX');
      };
      o.sortDirections = ['ascend', 'descend'];
    }
    if (c.filter) {
      const vals = [...new Set(dataSource.map(r => r[c.dataIndex]))].filter(v => typeof v === 'string' || typeof v === 'number');
      o.filters = vals.map(v => ({
        text: String(v),
        value: v
      }));
      o.onFilter = (v, r) => r[c.dataIndex] === v;
      o.filterIcon = f => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: "filter",
        size: 12,
        color: c.filtered || f ? 'var(--color-primary)' : 'var(--text-quaternary)'
      });
    }
    return o;
  });
  const keys = rowSelection && rowSelection.selectedRowKeys || [];
  const pag = pagination ? {
    current: pagination.current,
    pageSize: pagination.pageSize,
    total: pagination.total,
    onChange: pagination.onChange,
    pageSizeOptions: pagination.pageSizeOptions,
    showSizeChanger: pagination.showSizeChanger === undefined ? false : pagination.showSizeChanger,
    showTotal: (pagination.showTotal === undefined ? true : pagination.showTotal) ? (t, r) => n(r[0]) + '–' + n(r[1]) + ' de ' + n(t) + ' registros' : undefined
  } : false;
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement("div", {
    style: style
  }, (title || toolbar) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-split)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-section-title)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      flex: '1 1 auto',
      justifyContent: title ? 'flex-end' : 'flex-start'
    }
  }, toolbar)), keys.length > 0 && rowSelection.actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      padding: '8px 16px',
      background: 'var(--color-primary-bg)',
      borderBottom: '1px solid var(--color-primary-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, keys.length, " seleccionados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, rowSelection.actions), /*#__PURE__*/React.createElement(A.Button, {
    type: "link",
    size: "small",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => rowSelection.onChange && rowSelection.onChange([])
  }, "Limpiar selecci\xF3n")), /*#__PURE__*/React.createElement(A.Table, {
    columns: cols,
    dataSource: dataSource,
    rowKey: rowKey,
    size: size === 'small' ? 'small' : 'large',
    bordered: bordered,
    loading: loading,
    rowSelection: rowSelection ? {
      selectedRowKeys: keys,
      onChange: rowSelection.onChange
    } : undefined,
    onRow: onRow,
    pagination: pag,
    sticky: sticky,
    scroll: scrollY ? {
      y: scrollY
    } : undefined,
    showHeader: showHeader,
    footer: footer ? () => footer : undefined,
    rowClassName: striped ? (r, i) => i % 2 ? 'atomo-odd' : '' : undefined,
    locale: emptyState ? {
      emptyText: emptyState
    } : undefined
  })));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PRESET = {
  neutral: 'default',
  primary: 'blue',
  success: 'green',
  warning: 'gold',
  error: 'red',
  info: 'blue',
  purple: 'purple',
  cyan: 'cyan',
  magenta: 'magenta',
  volcano: 'volcano',
  lime: 'lime'
};
const BASE = {
  neutral: '#8c8c8c',
  primary: '#1677ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#f5222d',
  info: '#1677ff',
  purple: '#722ed1',
  cyan: '#13c2c2',
  magenta: '#eb2f96',
  volcano: '#fa541c',
  lime: '#a0d911'
};

/** Real antd Tag, pinned to 22px and 4px radius, with Atomo's five variants and the status dot. */
function Tag({
  variant = 'filled',
  color = 'neutral',
  icon,
  dot = false,
  closable = false,
  onClose,
  children,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Tag"
  });
  const base = BASE[color] || BASE.neutral;
  const p = {
    closable,
    onClose,
    icon: typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 12
    }) : icon
  };
  if (variant === 'solid') {
    p.color = base;
  } else if (variant === 'text') {
    p.bordered = false;
    p.style = {
      background: 'transparent',
      color: base,
      paddingInline: 0
    };
  } else {
    p.color = PRESET[color] || 'default';
  }
  if (variant === 'outline') p.style = {
    background: 'transparent'
  };
  if (variant === 'dashed') p.style = {
    background: 'transparent',
    borderStyle: 'dashed'
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Tag, _extends({}, p, rest, {
    style: {
      height: 22,
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'middle',
      gap: 6,
      borderRadius: 4,
      paddingInline: variant === 'text' ? 0 : 8,
      margin: 0,
      ...p.style,
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      flex: '0 0 auto',
      background: variant === 'solid' ? '#fff' : base
    }
  }), children));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
const KIND = {
  confirm: ['circle-help', 'var(--color-primary)'],
  warning: ['triangle-alert', 'var(--color-warning)'],
  error: ['circle-x', 'var(--color-error)'],
  success: ['circle-check', 'var(--color-success)'],
  info: ['info', 'var(--color-info)']
};

/** Real antd Modal. 'default' is a titled dialog; the rest are icon confirmations. */
function Modal({
  open = false,
  onClose,
  onOk,
  title,
  description,
  kind = 'default',
  width = 520,
  okText = 'Aceptar',
  cancelText = 'Cancelar',
  okTone,
  okLoading,
  footer,
  hideFooter = false,
  closable = true,
  inline = false,
  children,
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return null;
  const k = KIND[kind];
  const pos = inline ? {
    position: 'absolute'
  } : undefined;
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, {
    tone: okTone === 'success' ? 'success' : undefined
  }, /*#__PURE__*/React.createElement(A.Modal, {
    open: open,
    onCancel: onClose,
    onOk: onOk,
    width: width,
    closable: closable,
    getContainer: inline ? false : undefined,
    centered: inline ? true : undefined,
    styles: inline ? {
      mask: pos,
      wrapper: {
        ...pos,
        overflow: 'hidden'
      }
    } : undefined,
    maskClosable: kind === 'default',
    title: k ? null : title,
    okText: okText,
    cancelText: cancelText,
    confirmLoading: okLoading,
    okButtonProps: {
      danger: okTone === 'danger' || kind === 'error'
    },
    footer: hideFooter ? null : footer,
    style: style
  }, k ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: k[0],
    size: 22,
    color: k[1],
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-section-title)',
      color: 'var(--text-heading)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, children))) : children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const D = () => typeof window !== 'undefined' && window.dayjs || null;
const toD = v => {
  const d = D();
  if (!d || v == null) return v ?? null;
  return v && v.$d ? v : d(v);
};

/** Real antd DatePicker / RangePicker. es-MX format, two sizes, 6px radius. */
function DatePicker({
  mode = 'date',
  value,
  onChange,
  placeholder,
  size = 'default',
  status = 'default',
  disabled,
  allowClear = true,
  block = true,
  width,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "DatePicker"
  });
  const s = size === 'compact' ? 14 : 16;
  const fmt = mode === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'DD/MM/YYYY';
  const common = {
    size: size === 'compact' ? 'small' : 'middle',
    status: status === 'default' ? undefined : status,
    disabled,
    allowClear,
    format: fmt,
    suffixIcon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "calendar",
      size: s,
      color: "var(--text-quaternary)"
    }),
    style: {
      width: width || (block ? '100%' : undefined),
      ...style
    },
    ...rest
  };
  if (mode === 'range') {
    const v = Array.isArray(value) ? [toD(value[0]), toD(value[1])] : undefined;
    return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.DatePicker.RangePicker, _extends({}, common, {
      value: v,
      onChange: onChange,
      placeholder: ['dd/mm/aaaa', 'dd/mm/aaaa']
    })));
  }
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.DatePicker, _extends({}, common, {
    value: toD(value),
    onChange: onChange,
    showTime: mode === 'datetime' ? {
      format: 'HH:mm'
    } : false,
    placeholder: placeholder || (mode === 'datetime' ? 'dd/mm/aaaa hh:mm' : 'dd/mm/aaaa')
  })));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const affix = (v, s) => typeof v === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
  name: v,
  size: s,
  color: "var(--text-tertiary)"
}) : v;

/** Real antd Input (or Input.Password), locked to the two Atomo sizes and 6px radius. */
function Input({
  size = 'default',
  status = 'default',
  variant = 'outlined',
  prefix,
  suffix,
  allowClear,
  type = 'text',
  addonBefore,
  addonAfter,
  block = true,
  inputStyle,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Input"
  });
  const s = size === 'compact' ? 14 : 16;
  const p = {
    size: size === 'compact' ? 'small' : 'middle',
    status: status === 'default' ? undefined : status,
    variant,
    prefix: affix(prefix, s),
    suffix: affix(suffix, s),
    allowClear,
    addonBefore,
    addonAfter,
    style: {
      width: block ? '100%' : undefined,
      ...inputStyle,
      ...style
    },
    ...rest
  };
  const C = type === 'password' ? A.Input.Password : A.Input;
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, type === 'password' ? /*#__PURE__*/React.createElement(C, p) : /*#__PURE__*/React.createElement(C, _extends({
    type: type
  }, p)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Atomo's modern radio: the whole card is the hit target. Title + optional description + optional icon. */
function RadioCard({
  checked = false,
  disabled = false,
  onChange,
  value,
  title,
  description,
  icon,
  extra,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const border = disabled ? 'var(--border-base)' : checked ? 'var(--color-primary)' : hover ? 'var(--color-primary-hover)' : 'var(--border-base)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radio",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(value),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 12,
      padding: 'var(--padding-card-compact)',
      background: disabled ? 'var(--surface-sunken)' : checked ? 'var(--color-primary-bg)' : 'var(--surface-card)',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-card)',
      boxShadow: checked && !disabled ? 'var(--focus-ring)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      marginTop: 3,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: '50%',
      background: disabled ? 'var(--surface-disabled)' : 'var(--surface-card)',
      border: '1px solid ' + (disabled ? 'var(--border-base)' : checked ? 'var(--color-primary)' : 'var(--border-base)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: disabled ? 'var(--border-base)' : 'var(--color-primary)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  })), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-md)',
      background: checked && !disabled ? 'var(--surface-card)' : 'var(--surface-hover)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: disabled ? 'var(--text-disabled)' : checked ? 'var(--color-primary)' : 'var(--text-secondary)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 140px',
      minWidth: 120,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      fontWeight: 500,
      color: disabled ? 'var(--text-disabled)' : 'var(--text-heading)',
      overflowWrap: 'anywhere'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)'
    }
  }, description)), extra && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      marginLeft: 'auto'
    }
  }, extra));
}

/** Group of RadioCards. Layout 'stack' (default) or 'grid'. */
function RadioCardGroup({
  value,
  defaultValue,
  onChange,
  options = [],
  layout = 'stack',
  columns = 2,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = useState(defaultValue);
  const controlled = value !== undefined;
  const val = controlled ? value : inner;
  const pick = v => {
    if (!controlled) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup"
  }, rest, {
    style: layout === 'grid' ? {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      gap: 'var(--space-3)',
      ...style
    } : {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }), options.map(o => /*#__PURE__*/React.createElement(RadioCard, _extends({
    key: o.value
  }, o, {
    checked: val === o.value,
    disabled: disabled || o.disabled,
    onChange: pick
  }))));
}
Object.assign(__ds_scope, { RadioCard, RadioCardGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Real antd Input.Search — the search field in every Atomo toolbar. */
function SearchInput({
  size = 'default',
  placeholder = 'Buscar',
  value,
  defaultValue,
  onChange,
  onSearch,
  attachedButton = false,
  width = 260,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Input.Search"
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Input.Search, _extends({
    size: size === 'compact' ? 'small' : 'middle',
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    allowClear: true,
    onChange: e => onChange && onChange(e.target.value),
    onSearch: onSearch,
    enterButton: attachedButton ? true : false,
    prefix: attachedButton ? undefined : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "search",
      size: size === 'compact' ? 14 : 16,
      color: "var(--text-tertiary)"
    }),
    style: {
      width,
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Real antd Select. Single, multiple, searchable, loading and disabled — two sizes only. */
function Select({
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder = 'Selecciona una opción',
  size = 'default',
  status = 'default',
  variant = 'outlined',
  disabled,
  loading,
  multiple = false,
  showSearch = false,
  allowClear = false,
  block = true,
  width,
  maxTagCount = 2,
  style,
  ...rest
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Select"
  });
  const s = size === 'compact' ? 14 : 16;
  const opts = options.map(o => o.icon ? {
    ...o,
    label: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: s,
      color: "var(--text-secondary)"
    }), o.label)
  } : o);
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Select, _extends({
    options: opts,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    size: size === 'compact' ? 'small' : 'middle',
    status: status === 'default' ? undefined : status,
    variant: variant,
    disabled: disabled,
    loading: loading,
    mode: multiple ? 'multiple' : undefined,
    showSearch: showSearch || multiple,
    optionFilterProp: "label",
    allowClear: allowClear,
    maxTagCount: maxTagCount,
    suffixIcon: loading ? undefined : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: s,
      color: "var(--text-quaternary)"
    }),
    style: {
      width: width || (block ? '100%' : undefined),
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Collapse.jsx
try { (() => {
/** Real antd Collapse. 'separated' cards, 'joined' stack or 'ghost'. */
function Collapse({
  items = [],
  activeKeys,
  defaultActiveKeys,
  onChange,
  accordion = false,
  variant = 'separated',
  size = 'default',
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Collapse"
  });
  const s = size === 'compact' ? 14 : 16;
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Collapse, {
    activeKey: activeKeys,
    defaultActiveKey: defaultActiveKeys,
    onChange: onChange,
    accordion: accordion,
    bordered: variant === 'joined',
    ghost: variant === 'ghost',
    size: size === 'compact' ? 'small' : 'middle',
    className: variant === 'separated' ? 'atomo-sep' : undefined,
    style: variant === 'separated' ? {
      background: 'transparent',
      border: 'none',
      ...style
    } : style,
    expandIcon: ({
      isActive
    }) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: s,
      style: {
        transform: isActive ? 'rotate(90deg)' : 'none',
        transition: 'transform .12s cubic-bezier(.215,.61,.355,1)'
      }
    }),
    items: items.map(i => ({
      key: i.key,
      extra: i.extra,
      collapsible: i.disabled ? 'disabled' : undefined,
      children: i.children,
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          flexWrap: 'wrap'
        }
      }, i.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: i.icon,
        size: s,
        color: "var(--text-secondary)"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          color: 'var(--text-heading)'
        }
      }, i.label), i.description && /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-caption)',
          color: 'var(--text-tertiary)'
        }
      }, i.description))
    }))
  }));
}
Object.assign(__ds_scope, { Collapse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Collapse.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
const SID = 'atomo-sidebar-layer';
function ensureNavStyles() {
  if (typeof document === 'undefined' || document.getElementById(SID)) return;
  const s = document.createElement('style');
  s.id = SID;
  s.textContent = ['.atomo-nav .ant-menu{border-inline-end:none!important;background:transparent}', /* rc-menu writes padding-left inline from its own indent math — !important is the only way to own the icon column. */
  '.atomo-nav .ant-menu-root>.ant-menu-item,.atomo-nav .ant-menu-root>.ant-menu-submenu>.ant-menu-submenu-title,.atomo-nav .ant-menu-item-group-list>.ant-menu-item,.atomo-nav .ant-menu-item-group-list>.ant-menu-submenu>.ant-menu-submenu-title{padding-left:12px!important}', '.atomo-nav .ant-menu-sub>.ant-menu-item{padding-left:36px!important}', /* antd offsets the submenu chevron 2px up and insets it 16px; match the 20px icon column and the optical centre. */
  '.atomo-nav .ant-menu-submenu-arrow{transform:none!important;right:12px!important}', '.atomo-nav .ant-menu-inline-collapsed>.ant-menu-item,.atomo-nav .ant-menu-inline-collapsed .ant-menu-item,.atomo-nav .ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title{padding-left:12px!important}', /* Collapsed: only the icon survives, centred in its 40px button. No chevron, no ghost label taking space. */
  '.atomo-nav .ant-menu-inline-collapsed .ant-menu-item,.atomo-nav .ant-menu-inline-collapsed .ant-menu-submenu-title{display:flex!important;align-items:center;justify-content:center;padding-inline:12px!important}', '.atomo-nav .ant-menu-inline-collapsed .ant-menu-submenu-arrow{display:none!important}', '.atomo-nav .ant-menu-inline-collapsed .ant-menu-title-content,.atomo-nav .ant-menu-inline-collapsed .ant-menu-submenu-title>span:not(.ant-menu-item-icon){display:none!important}', '.atomo-nav .ant-menu-item-group-title{text-transform:uppercase;letter-spacing:.6px;font-size:11px;font-weight:600;line-height:1.4;padding:12px 20px 4px}', '.atomo-nav .ant-menu-inline-collapsed .ant-menu-item-group-title{display:none}', '.atomo-nav .ant-menu-item,.atomo-nav .ant-menu-submenu-title{transition:background .08s var(--ease-out,cubic-bezier(.215,.61,.355,1)),color .08s var(--ease-out,cubic-bezier(.215,.61,.355,1))}', '.atomo-nav-scroll{overflow-y:auto;overflow-x:hidden;scrollbar-width:thin}', '.atomo-nav-scroll::-webkit-scrollbar{width:6px}', '.atomo-nav-scroll::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(255,255,255,.16)}', '.atomo-nav-scroll.is-light::-webkit-scrollbar-thumb{background:rgba(0,0,0,.14)}', '.atomo-nav-toggle:hover{background:var(--surface-nav-hover);color:var(--text-nav-strong);border-color:rgba(255,255,255,.28)}', '.atomo-nav-toggle.is-light:hover{background:var(--surface-hover);color:var(--text-body);border-color:var(--border-strong)}'].join('');
  document.head.appendChild(s);
}
const MENU_DARK = {
  itemHeight: 40,
  itemMarginInline: 8,
  itemMarginBlock: 2,
  itemBorderRadius: 6,
  iconSize: 16,
  collapsedIconSize: 16,
  iconMarginInlineEnd: 8,
  collapsedWidth: 56,
  darkItemBg: 'transparent',
  darkSubMenuItemBg: 'transparent',
  darkPopupBg: '#0f172a',
  darkItemColor: 'rgba(255,255,255,.72)',
  darkItemHoverColor: '#ffffff',
  darkItemHoverBg: 'rgba(255,255,255,.08)',
  darkItemSelectedBg: '#1e293b',
  darkItemSelectedColor: '#ffffff',
  darkGroupTitleColor: 'rgba(255,255,255,.45)',
  darkItemDisabledColor: 'rgba(255,255,255,.25)',
  activeBarWidth: 0,
  activeBarBorderWidth: 0
};
const MENU_LIGHT = {
  itemHeight: 40,
  itemMarginInline: 8,
  itemMarginBlock: 2,
  itemBorderRadius: 6,
  iconSize: 16,
  collapsedIconSize: 16,
  iconMarginInlineEnd: 8,
  collapsedWidth: 56,
  itemBg: 'transparent',
  subMenuItemBg: 'transparent',
  itemColor: 'rgba(0,0,0,.88)',
  itemHoverColor: 'rgba(0,0,0,.88)',
  itemHoverBg: '#f5f5f5',
  itemSelectedBg: '#e6f4ff',
  itemSelectedColor: '#1677ff',
  groupTitleColor: 'rgba(0,0,0,.45)',
  itemDisabledColor: 'rgba(0,0,0,.25)',
  activeBarWidth: 0,
  activeBarBorderWidth: 0
};
const cache = {};
function navTheme(light) {
  const k = light ? 'l' : 'd';
  if (!cache[k]) cache[k] = {
    token: __ds_scope.ATOMO_THEME.token,
    components: {
      ...__ds_scope.ATOMO_THEME.components,
      Menu: light ? MENU_LIGHT : MENU_DARK
    }
  };
  return cache[k];
}
const chip = light => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 18,
  height: 18,
  padding: '0 5px',
  borderRadius: 4,
  fontSize: 11,
  fontWeight: 600,
  lineHeight: '18px',
  fontVariantNumeric: 'tabular-nums',
  background: light ? 'var(--surface-hover)' : 'rgba(255,255,255,.14)',
  color: light ? 'var(--text-secondary)' : '#ffffff'
});

/** Sidebar navigation for admin apps. Real antd Menu (inline) inside Atomo's fixed nav chrome. */
function Sidebar({
  items = [],
  selectedKey,
  defaultSelectedKey,
  openKeys,
  defaultOpenKeys,
  onSelect,
  onOpenChange,
  brand = 'Atomo',
  brandMark,
  brandHref,
  variant = 'dark',
  collapsible = true,
  collapsed,
  defaultCollapsed = false,
  onCollapse,
  header,
  footer,
  user,
  width,
  style
}) {
  const A = __ds_scope.useAntd();
  const [own, setOwn] = React.useState(defaultCollapsed);
  const [ownSel, setOwnSel] = React.useState(defaultSelectedKey);
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Sidebar"
  });
  ensureNavStyles();
  const light = variant === 'light';
  const isCol = collapsed === undefined ? own : collapsed;
  const sel = selectedKey === undefined ? ownSel : selectedKey;
  const toggle = () => {
    const n = !isCol;
    if (collapsed === undefined) setOwn(n);
    onCollapse && onCollapse(n);
  };
  const label = (i, depth) => {
    const txt = /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, i.label);
    if (i.badge === undefined) return txt;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        minWidth: 0
      }
    }, txt, /*#__PURE__*/React.createElement("span", {
      style: chip(light)
    }, i.badge));
  };
  const map = (list, depth = 0) => list.flatMap((i, n) => {
    if (i.type === 'divider') return [{
      type: 'divider',
      key: i.key || 'd' + depth + '-' + n,
      style: {
        margin: '8px 12px',
        background: light ? 'var(--border-split)' : 'var(--border-nav)'
      }
    }];
    if (i.type === 'group') {
      const div = {
        type: 'divider',
        key: 'gd' + depth + '-' + n,
        style: {
          margin: '8px 12px',
          background: light ? 'var(--border-split)' : 'var(--border-nav)'
        }
      };
      /* Collapsed: no room for a caption, so the group flattens to a divider + its items. */
      if (isCol) return n === 0 ? map(i.children || [], depth) : [div, ...map(i.children || [], depth)];
      return [{
        type: 'group',
        key: i.key || 'g' + depth + '-' + n,
        label: i.label,
        children: map(i.children || [], depth)
      }];
    }
    return [{
      key: i.key,
      disabled: i.disabled,
      danger: i.danger,
      icon: i.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: i.icon,
        size: 16
      }) : undefined,
      label: i.href && !i.children ? /*#__PURE__*/React.createElement("a", {
        href: i.href,
        style: {
          color: 'inherit'
        }
      }, label(i, depth)) : label(i, depth),
      children: i.children ? map(i.children, depth + 1) : undefined
    }];
  });
  const bg = light ? 'var(--surface-card)' : 'var(--surface-nav)';
  const line = light ? 'var(--border-split)' : 'var(--border-nav)';
  const strong = light ? 'var(--text-heading)' : 'var(--text-nav-strong)';
  const muted = light ? 'var(--text-tertiary)' : 'var(--text-nav-muted)';
  const toggleBtn = collapsible ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    "aria-label": isCol ? 'Expandir menú' : 'Colapsar menú',
    className: 'atomo-nav-toggle' + (light ? ' is-light' : ''),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: 28,
      height: 28,
      marginInlineStart: isCol ? 0 : 'auto',
      marginInlineEnd: isCol ? -2 : -4,
      padding: 0,
      border: `var(--border-width) solid ${line}`,
      borderRadius: 'var(--radius-button)',
      background: 'transparent',
      color: muted,
      cursor: 'pointer',
      transition: 'background .08s cubic-bezier(.215,.61,.355,1),color .08s cubic-bezier(.215,.61,.355,1),border-color .08s cubic-bezier(.215,.61,.355,1)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isCol ? 'panel-left-open' : 'panel-left-close',
    size: 16
  })) : null;
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, {
    theme: navTheme(light)
  }, /*#__PURE__*/React.createElement("nav", {
    className: "atomo-nav",
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 auto',
      width: width || (isCol ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width)'),
      height: '100%',
      background: bg,
      borderInlineEnd: light ? 'var(--border-width) solid var(--border-split)' : 'none',
      transition: 'width .2s cubic-bezier(.215,.61,.355,1)',
      overflow: 'hidden',
      ...style
    }
  }, header !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--topbar-height)',
      flex: '0 0 auto',
      padding: isCol ? '0 14px' : '0 20px',
      borderBottom: `var(--border-width) solid ${line}`
    }
  }, isCol ? toggleBtn : /*#__PURE__*/React.createElement(React.Fragment, null, header || /*#__PURE__*/React.createElement("a", {
    href: brandHref || '#',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0,
      color: 'inherit'
    }
  }, brandMark || /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: 24,
      height: 24,
      borderRadius: 'var(--radius-button)',
      background: 'var(--color-primary)',
      color: '#fff',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '-.02em'
    }
  }, (brand || 'A').trim().charAt(0).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-section-title)',
      letterSpacing: '-.02em',
      color: strong,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, brand)), toggleBtn)), /*#__PURE__*/React.createElement("div", {
    className: 'atomo-nav-scroll' + (light ? ' is-light' : ''),
    style: {
      flex: '1 1 auto',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(A.Menu, {
    mode: "inline",
    theme: light ? 'light' : 'dark',
    inlineCollapsed: isCol,
    selectedKeys: sel ? [sel] : [],
    openKeys: openKeys,
    defaultOpenKeys: defaultOpenKeys,
    onOpenChange: onOpenChange,
    onClick: e => {
      if (selectedKey === undefined) setOwnSel(e.key);
      onSelect && onSelect(e.key);
    },
    items: map(items)
  })), user && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: '0 0 auto',
      height: 56,
      padding: isCol ? '0 14px' : '0 20px',
      borderTop: `var(--border-width) solid ${line}`
    }
  }, /*#__PURE__*/React.createElement(A.Avatar, {
    size: 28,
    src: user.avatar,
    style: {
      flex: '0 0 auto',
      background: light ? 'var(--color-primary-bg)' : 'rgba(255,255,255,.16)',
      color: light ? 'var(--color-primary)' : '#ffffff',
      fontSize: 12,
      fontWeight: 600
    }
  }, (user.name || '?').trim().charAt(0).toUpperCase()), !isCol && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontWeight: 500,
      color: strong,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, user.name), user.meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: muted,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, user.meta))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      padding: isCol ? '8px' : '12px 20px',
      borderTop: `var(--border-width) solid ${line}`,
      font: 'var(--type-caption)',
      color: muted
    }
  }, footer)));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const chip = size => ({
  display: 'inline-flex',
  alignItems: 'center',
  height: 18,
  padding: '0 6px',
  borderRadius: 4,
  background: 'var(--surface-hover)',
  font: 'var(--type-caption)',
  color: 'var(--text-secondary)',
  marginLeft: 6
});

/** Real antd Tabs (line/card) or Segmented, at 32px / 28px. */
function Tabs({
  items = [],
  activeKey,
  defaultActiveKey,
  onChange,
  size = 'default',
  variant = 'line',
  extra,
  block = false,
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Tabs"
  });
  const s = size === 'compact' ? 14 : 16;
  const label = i => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, i.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: i.icon,
    size: s
  }), i.label, i.badge !== undefined && /*#__PURE__*/React.createElement("span", {
    style: chip(s)
  }, i.badge));
  if (variant === 'segmented') {
    return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Segmented, {
      size: size === 'compact' ? 'small' : 'middle',
      value: activeKey,
      defaultValue: defaultActiveKey,
      onChange: onChange,
      block: block,
      style: style,
      options: items.map(i => ({
        value: i.key,
        label: label(i),
        disabled: i.disabled
      }))
    }));
  }
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Tabs, {
    activeKey: activeKey,
    defaultActiveKey: defaultActiveKey,
    onChange: onChange,
    size: size === 'compact' ? 'small' : 'middle',
    type: variant === 'card' ? 'card' : 'line',
    tabBarExtraContent: extra,
    tabBarStyle: block ? {
      display: 'flex'
    } : undefined,
    style: style,
    items: items.map(i => ({
      key: i.key,
      label: label(i),
      disabled: i.disabled,
      children: i.children
    }))
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dropdown.jsx
try { (() => {
/** Real antd Dropdown — the home for secondary row and page actions. */
function Dropdown({
  items = [],
  trigger,
  onSelect,
  placement = 'bottom-end',
  width,
  disabled,
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Dropdown"
  });
  const mapped = items.map((i, idx) => {
    if (i.type === 'divider') return {
      type: 'divider',
      key: i.key || 'd' + idx
    };
    if (i.type === 'group') return {
      type: 'group',
      key: i.key || 'g' + idx,
      label: i.label
    };
    return {
      key: i.key || 'i' + idx,
      danger: i.danger,
      disabled: i.disabled,
      onClick: i.onClick,
      icon: i.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: i.icon,
        size: 14
      }) : undefined,
      label: i.shortcut ? /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24
        }
      }, /*#__PURE__*/React.createElement("span", null, i.label), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-caption)',
          color: 'var(--text-quaternary)'
        }
      }, i.shortcut)) : i.label
    };
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Dropdown, {
    disabled: disabled,
    trigger: ['click'],
    placement: placement === 'bottom-start' ? 'bottomLeft' : 'bottomRight',
    menu: {
      items: mapped,
      onClick: ({
        key
      }) => onSelect && onSelect(key),
      style: width ? {
        minWidth: width
      } : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      ...style
    }
  }, trigger)));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Tooltip.jsx
try { (() => {
/** Real antd Tooltip. One line, never an action inside. */
function Tooltip({
  title,
  placement = 'top',
  delay = 100,
  maxWidth = 260,
  children,
  style
}) {
  const A = __ds_scope.useAntd();
  if (!A) return /*#__PURE__*/React.createElement(__ds_scope.MissingAntd, {
    name: "Tooltip"
  });
  return /*#__PURE__*/React.createElement(__ds_scope.Themed, null, /*#__PURE__*/React.createElement(A.Tooltip, {
    title: title,
    placement: placement,
    mouseEnterDelay: delay / 1000,
    styles: {
      root: {
        maxWidth,
        ...style
      }
    }
  }, children));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Tooltip.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Loader = __ds_scope.Loader;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.RadioCard = __ds_scope.RadioCard;

__ds_ns.RadioCardGroup = __ds_scope.RadioCardGroup;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ATOMO_THEME = __ds_scope.ATOMO_THEME;

__ds_ns.MissingAntd = __ds_scope.MissingAntd;

__ds_ns.Themed = __ds_scope.Themed;

__ds_ns.AtomoProvider = __ds_scope.AtomoProvider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Collapse = __ds_scope.Collapse;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
