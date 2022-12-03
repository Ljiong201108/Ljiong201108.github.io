const { Component } = require('inferno');
const Friends = require('./common/friends');

module.exports = class extends Component {
    render() {
        const { config, page, helper } = this.props;

        return <Friends config={config} page={page} helper={helper} index={false} />;
    }
};
