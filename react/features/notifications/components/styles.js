// @flow

import { BoxModel, createStyleSheet, ColorPalette } from '../../base/styles';

/**
 * The styles of the React {@code Components} of the feature notifications.
 */
export default createStyleSheet({

    /**
     * The content (left) column of the notification.
     */
    contentColumn: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 1.5 * BoxModel.padding
    },

    /**
     * Test style of the notification.
     */
    contentText: {
        alignSelf: 'flex-start',
        color: ColorPalette.white
    },

    /**
     * Dismiss icon style.
     */
    dismissIcon: {
        color: ColorPalette.white,
        fontSize: 20,
        padding: 1.5 * BoxModel.padding
    },

    /**
     * Outermost view of a single notification.
     */
    notification: {
        // NOTE: Mobile has black background when the large video doesn't render
        // a stream, so we avoid using black as the background of the normal
        // type notifications.
        backgroundColor: '#778899',
        flexDirection: 'row',
        height: 48,
        marginTop: 0.5 * BoxModel.margin
    },

    /**
     * Outermost container of a list of notifications.
     */
    notificationContainer: {
        flexGrow: 0,
        justifyContent: 'flex-end'
    },

    /**
     * Wrapper for the message.
     */
    notificationContent: {
        flexDirection: 'column'
    }
});
