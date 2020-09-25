export default class Markdown {

    /**
     * @param value convert a special subset markdown syntax rules to HTML counterparts
     */
    static toHTML(value) {
        value =
            value.replaceAll(/`([^`]+)`/g, '<span class="code-inline">$1</span>') //inline code-blocks
                .replaceAll(/\n/g, '<br/>') // new-lines ... duh
                .replaceAll(/\[([^\]]+)\]\(\s*http(s)?([^\)]+)\)/g, '<a href="$2" target="_blank">$1</a>'); //external links : [desc](example.com)
        return value;
    }

}