'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcTouchable = require('rc-touchable');

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// button 组件
var Button = function Button(props) {
    var prefixCls = props.prefixCls,
        type = props.type,
        disabled = props.disabled,
        group = props.group,
        inline = props.inline,
        loading = props.loading,
        activeClassName = props.activeClassName,
        iconClass = props.iconClass,
        className = props.className,
        onClick = props.onClick,
        children = props.children;


    var cn = (0, _classnames2.default)([prefixCls, {
        'inline': inline,
        'group': group,
        'primary': type === 'primary',
        'ghost': type === 'ghost',
        'disabled': disabled || loading
    }, className]);

    // 有loading的时候，显示loading icon
    var iconDOM = loading ? _react2.default.createElement('span', { className: 'fa fa-circle-o-notch fa-spin' }) : iconClass ? _react2.default.createElement('span', { className: 'fa ' + iconClass }) : '';

    return _react2.default.createElement(
        _rcTouchable2.default,
        {
            activeClassName: activeClassName,
            disabled: disabled || loading,
            onPress: onClick
        },
        _react2.default.createElement(
            'a',
            { className: cn },
            iconDOM,
            _react2.default.createElement(
                'span',
                { className: prefixCls + '-text' },
                children
            )
        )
    );
}; /**
    * Created by Aus on 2017/11/22.
    */


Button.propTypes = {
    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.node]).isRequired,
    prefixCls: _react2.default.PropTypes.string, // 前缀class
    type: _react2.default.PropTypes.oneOf(['default', 'primary', 'ghost']), // 类型 枚举 有 default（白底黑字） primary（绿底白字） ghost（白底绿字） 三种
    disabled: _react2.default.PropTypes.bool, // 是否不可点击 不可点击时 样式会有调整 默认false
    group: _react2.default.PropTypes.bool, // 是否 按按钮组显示 默认是false
    inline: _react2.default.PropTypes.bool, // 是否是行内显示 默认false
    loading: _react2.default.PropTypes.bool, // 是否显示loading loading时候按钮显示loading icon并且不可点击
    activeClassName: _react2.default.PropTypes.string, // 点击时候的类名
    iconClass: _react2.default.PropTypes.string, // icon类名 只支持awesome的icon
    className: _react2.default.PropTypes.string, // 自定义class
    onClick: _react2.default.PropTypes.func // 点击的回调函数
};

Button.defaultProps = {
    prefixCls: 'qj-button',
    type: 'default',
    disabled: false,
    group: false,
    inline: false,
    loading: false,
    activeClassName: 'qj-button-active'
};

exports.default = Button;
//# sourceMappingURL=Button.js.map