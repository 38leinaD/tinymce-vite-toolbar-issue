/* Import TinyMCE */
import tinymce from 'tinymce';

/* Default icons are required. After that, import custom icons if applicable */
import 'tinymce/icons/default/icons.min.js';

/* Required TinyMCE components */
import 'tinymce/themes/silver/theme.min.js';
import 'tinymce/models/dom/model.min.js';

/* Import a skin (can be a custom skin instead of the default) */
import 'tinymce/skins/ui/oxide/skin.js';

/* Import plugins */
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/code';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';

/* Import premium plugins */
/* NOTE: Download separately and add these to /src/plugins */
/* import './plugins/checklist/plugin.js'; */
/* import './plugins/powerpaste/plugin.js'; */
/* import './plugins/powerpaste/js/wordimport.js'; */

/* content UI CSS is required */
//import contentUiSkinCss from 'tinymce/skins/ui/oxide/content.js'; // Uncaught SyntaxError: The requested module '/node_modules/.vite/deps/tinymce_skins_ui_oxide_content__js.js?v=ac513173' does not provide an export named 'default' (at editor.js:30:8)

/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
//import contentCss from 'tinymce/skins/content/default/content.js'; // Uncaught SyntaxError: The requested module '/node_modules/.vite/deps/tinymce_skins_content_default_content__js.js?v=61522085' does not provide an export named 'default' (at editor.js:33:8)


export class AEditor extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        this.render();
    }

    render() {

        //const root = this; // <- TOOLBAR SHOWS
        const root = this.attachShadow({mode: 'open'}); // <- TOOLBAR DOES NOT SHOW

        const textarea = document.createElement('textarea');
        textarea.value = 'Text added to the <em>TinyMCE</em> editor instance <strong>on loading.</strong>';
        root.appendChild(textarea);

        tinymce.init({
		    target: textarea,
		    plugins: 'advlist code emoticons link lists table',
		    toolbar: 'bold italic | bullist numlist | link emoticons',
		    skin_url: 'default',
		    content_css: 'default',
		  })
    }
}

window.customElements.define('a-editor', AEditor)
