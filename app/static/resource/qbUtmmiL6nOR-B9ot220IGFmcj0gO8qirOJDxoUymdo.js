class CustomSearch extends HTMLElement {

    constructor() {
        super();

        this.root = this.attachShadow({mode: 'open'});
        this.container = document.createElement('div');
        this.root.appendChild(this.container);

        this.container.innerHTML = CustomSearch.template();


    }


    static get observedAttributes() {
        return ['text'];
    }


    connectedCallback() {
        // this.dispatchEvent(new CustomEvent());
        const closeButton = this.root.querySelector('.close-button');
        closeButton.style.display = 'none';
        closeButton.addEventListener('click', evt => {
            input.value = '';
            closeButton.style.display = 'none';
        });
        const input = this.root.querySelector('input');
        input.addEventListener('input', evt => {
            if (input.value.length) {
                closeButton.style.display = 'block';
            }
        });
        input.addEventListener('keydown', evt => {
            if (evt.key === 'Enter') {
                this.dispatchEvent(new CustomEvent('submit', {
                    detail: input.value
                }));
            }
        })

        const searchButton = this.root.querySelector('.search-button');
        searchButton.addEventListener('click', evt => {
            this.dispatchEvent(new CustomEvent('submit', {
                detail: input.value
            }));
        });
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'show') {
            this.root.querySelector('.wrapper').style.transform = 'translateX(250px)';
        }
    }

    static template() {
        return `
        ${CustomSearch.style()}

    <div class="wrapper">
      <div class="layout">
        <div class="box">
          <button class="search-button">
            <div class="search-button-wrapper">
              <span>
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                  </path>
                </svg>
              </span>
            </div>
          </button>
          <div class="search-main">
            <div class="search-main-wrapper">
              <input type="text" maxlength="2048" name="q" aria-autocomplete="list" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" tabindex="0" title="搜索" aria-label="搜索" />
            </div>
          </div>
          <div class="right">
            <button class="close-button">
              <span>
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                  </path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

   `;
    }

    static style() {
        return `
        <style>
.wrapper
{
    position: relative;
    overflow: visible;
    box-shadow: none;
    border-radius: 25px;
    background: none;
    margin: -1px 16px 0;
}
.layout
{
    background: none;
    border-radius: 25px;
    padding-bottom: 4px;
}
.box
{
    display: flex;
    height: 44px;
    margin-top: 0;
    z-index: 3;
    box-shadow: 0 2px 5px 0 rgba(60,64,67,.16);
    border-radius: 25px;
    background: #fff;
}
.search-button
{
    display: flex;
    border-radius: 0 25px 25px 0;
    background: transparent;
    border: none;
    margin: 0 -1px 0 0;
    padding: 0 0 0 12px;
    flex: 0 0 auto;
    outline: 0;
}
.search-button-wrapper
{
    background: none;
    color: #9aa0a6;
    height: 24px;
    width: 24px;
    margin: auto;
}
button span
{
    display: inline-block;
    fill: currentColor;
    height: 24px;
    line-height: 24px;
    position: relative;
    width: 24px;
}
.search-main
{
    flex: 1;
    display: flex;
    padding: 7px 0;
}
.search-main-wrapper
{
    display: flex;
    flex: 1;
}
input[type=text]
{
    line-height: 25px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0 0 0 16px;
    font-size: 16px;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    display: flex;
    flex: 1;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    outline: 0;
}
.right
{
    display: flex;
    flex: 0 0 auto;
    align-items: stretch;
    margin-right: -3px;
}
.close-button
{
    display: flex;
    flex: 1;
    color: #70757a;
    cursor: pointer;
    align-items: center;
    padding: 0 12px;
    margin: 0 0;
    border: 0;
    background: transparent;
    outline: 0;
}
        </style>`;
    }


}

customElements.define('custom-search', CustomSearch);
/*
<!--
<script src="search.js"></script>
<custom-search></custom-search>
const customCustomSearch = document.querySelector('custom-search');
-->
*/
class CustomHeader extends HTMLElement {

    constructor() {
        super();

        this.root = this.attachShadow({mode: 'open'});
        this.container = document.createElement('div');
        this.root.appendChild(this.container);

        this.container.innerHTML = CustomHeader.template();

        this.navItems = this.root.querySelector('.nav-items');
        this.insertItem("/index", "首页", "M12 3c0 0-6.186 5.34-9.643 8.232-0.203 0.184-0.357 0.452-0.357 0.768 0 0.553 0.447 1 1 1h2v7c0 0.553 0.447 1 1 1h3c0.553 0 1-0.448 1-1v-4h4v4c0 0.552 0.447 1 1 1h3c0.553 0 1-0.447 1-1v-7h2c0.553 0 1-0.447 1-1 0-0.316-0.154-0.584-0.383-0.768-3.433-2.892-9.617-8.232-9.617-8.232z");
        this.insertDivider();
        this.insertItem();
        this.insertItem("/admin.users", "会员", "M9 12.984q1.5 0 3.281 0.422t3.258 1.406 1.477 2.203v3h-16.031v-3q0-1.219 1.477-2.203t3.258-1.406 3.281-0.422zM15 12q-0.609 0-1.313-0.234 1.313-1.547 1.313-3.75 0-0.891-0.375-2.016t-0.938-1.781q0.703-0.234 1.313-0.234 1.641 0 2.813 1.195t1.172 2.836-1.172 2.813-2.813 1.172zM5.016 8.016q0-1.641 1.172-2.836t2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172-2.813-1.172-1.172-2.813zM16.688 13.125q2.484 0.375 4.406 1.383t1.922 2.508v3h-4.031v-3q0-2.297-2.297-3.891z");
        this.insertItem("/admin.notices", "公告", "M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z");
        this.insertDivider();
        this.insertItem("/admin.help", "帮助", "M15.047 11.25q0.938-0.938 0.938-2.25 0-1.641-1.172-2.813t-2.813-1.172-2.813 1.172-1.172 2.813h1.969q0-0.797 0.609-1.406t1.406-0.609 1.406 0.609 0.609 1.406-0.609 1.406l-1.219 1.266q-1.172 1.266-1.172 2.813v0.516h1.969q0-1.547 1.172-2.813zM12.984 18.984v-1.969h-1.969v1.969h1.969zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z");

    }


    static get observedAttributes() {
        return ['title'];
    }

    insertDivider() {
        const div = document.createElement('div');
        div.style.background = "#dadce0";
        div.style.height = "1px";
        div.style.margin = "5px 0";
        this.navItems.appendChild(div);
    }

    insertItem(href, title, d) {
        const navItem = document.createElement('a');
        navItem.setAttribute("class", "nav-item");
        navItem.setAttribute("href", href || "/admin.lessons");
        const img = document.createElement('div');
        img.setAttribute("class", "img");
        navItem.appendChild(img);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute("viewbox", "0 0 24 24");
        img.appendChild(svg);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute("d", d || "M12 8.016q-1.219 0-2.109-0.891t-0.891-2.109 0.891-2.109 2.109-0.891 2.109 0.891 0.891 2.109-0.891 2.109-2.109 0.891zM12 11.531q3.75-3.516 9-3.516v10.969q-5.203 0-9 3.563-3.797-3.563-9-3.563v-10.969q5.25 0 9 3.516z");
        svg.appendChild(path);
        navItem.appendChild(document.createTextNode(title || `课程`));
        this.navItems.appendChild(navItem);
    }

    connectedCallback() {
        const navItems = this.root.querySelector('.nav-items');
        const container = this.root.querySelector('.container');
        container.addEventListener('click', evt => {
            evt.stopPropagation();
            requestAnimationFrame(() => {
                navItems.style.transform = 'translateX(0)';
                setTimeout(() => {
                    container.style.display = 'none';
                    container.style.background = 'rgba(0,0,0,0)';
                }, 250)
            })
        });
        this.root.querySelector('.nav').addEventListener('click', evt => {
            this.dispatchEvent(new CustomEvent('nav'));
            container.style.background = 'rgba(0,0,0,.6)';
            container.style.display = 'block';
            requestAnimationFrame(() => {
                navItems.style.transform = 'translateX(250px)';
            })
        })
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'title') {
            this.root.querySelector('.header').textContent = newVal;
        }
    }

    static template() {
        return `
        ${CustomHeader.style()}

    <div class="header">
    </div>
    <div class="nav">
      <div class="nav-wrapper">
        <svg style="fill: #70757a; width: 24px; height: 24px;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none">
          </path>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
          </path>
        </svg>
      </div>
      <div class="container">
        <div class="nav-items">
          

        </div>
      </div>
    </div>
  
   `;
    }

    static style() {
        return `
        <style>
.header
{
    display: flex;
    height: 64px;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.nav
{
    position: absolute;
    top: 0;
}
.nav-wrapper
{
    padding: 18px;
}
.container
{
    background-color: rgba(0,0,0,0);
    display: none;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 199;


}
.nav-items
{
    background-color: #fff;
    height: 100%;
    font-size: 16px;
    left: -250px;
    outline: none;
    overflow-y: scroll;
    padding-top: 15px;
    position: fixed;
    top: 0;
    transition: .5s;
    width: 250px;
    z-index: 200;
}
.nav-item
{
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    color: rgba(0,0,0,.54);
    height: 48px;
    line-height: 20px;
    width: 100%;
    vertical-align: middle;
    outline: 0;

}
.nav-item > .img
{
    padding: 0 15px;
    /*margin-bottom: 3px;*/
    width: 24px;
    /*vertical-align: middle;*/
  display: flex;
  align-items: center;
}
svg{
width: 24px;
height: 24px;
fill: currentColor;
}
        </style>`;
    }


}

customElements.define('custom-header', CustomHeader);
/*
<!--
<script src="index.js"></script>
<custom-index></custom-index>
-->
 */

class CustomMenu extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.container = document.createElement('div');
        this.root.appendChild(this.container);
        this.container.innerHTML = CustomMenu.template();
    }

    static get observedAttributes() {
        return ['text'];
    }

    connectedCallback() {
        // this.dispatchEvent(new CustomEvent());
        const close = this.root.querySelector('.close');
        close.addEventListener('click', evt => {
            evt.stopPropagation();
            this.style.display = 'none'
        });
    }

    insertItem(svg, title, callback) {
        const divider = this.root.querySelector('.divider');
        const div = document.createElement('div');
        div.innerHTML = `<div class="item">
          <div class="wrapper">
            <div class="item-container">
              <div class="img">
                ${svg}
              </div>
              <div class="text">
                ${title}
              </div>
            </div>
          </div>
        </div>`;
        div.addEventListener('click', callback);
        divider.insertAdjacentElement('beforebegin', div);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'show') {
            this.root.querySelector('.wrapper').style.transform = 'translateX(250px)';
        }
    }

    static template() {
        return `
        ${CustomMenu.style()}
    <div class="container">
      <div class="menu">
<!--        <div class="item">-->
<!--          <div class="wrapper">-->
<!--            <div class="item-container">-->
<!--              <div class="img">-->
<!--                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">-->
<!--                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z">-->
<!--                  </path>-->
<!--                </svg>-->
<!--              </div>-->
<!--              <div class="text">-->
<!--                分享-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <div class="divider">
        </div>
        <div class="close">
          <div class="close-wrapper">
            <div style="color: #3c4043; cursor: pointer; display: block; position: relative; left: -8px;">
              <div class="text">
                关闭菜单
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   `;
    }

    static style() {
        return `
        <style>
.item-container
{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #3c4043;
    cursor: pointer;
    display: block;
    position: relative;
    left: -8px;
    outline: 0;
}
.item
{
    display: block;
    position: relative;

}
.disable{
    background-color: rgba(0,0,0,.1);
}
.wrapper
{
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 16px;
    vertical-align: middle;
    line-height: 48px;
}
.img
{
    display: inline-block;
    fill: currentColor;
    line-height: 24px;
    position: relative;
    padding: 8px;
    cursor: pointer;
    vertical-align: middle;
    height: 20px;
    width: 20px;
}
.text
{
    display: inline-block;
    font-size: 14px;
    min-width: 62px;
    vertical-align: middle;
    width: 100%;
}
.divider
{
    display: block;
    position: relative;
    border-top: 1px solid;
    height: 0;
    margin: 5px 0;
    border-top-color: #dadce0;
    pointer-events: none;
    cursor: default;
    color: rgba(0,0,0,.26) !important;
}
:host
{
    position: fixed;
}
.container
{
    display: block;
    border-radius: 8px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);
    z-index: 1;/*left: 235px;*//*top: 1253px;*/
}
.menu
{
    border: none;
    display: block;
    white-space: nowrap;
    background-color: #fff;
    border-radius: 0;
    padding: 1px 0;
    outline: 0;
}
.close
{
    display: block;
    position: relative;
    outline: 0;
}
.close-wrapper
{
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 16px;
    vertical-align: middle;
    line-height: 48px;
}
        </style>`;
    }
}

customElements.define('custom-menu', CustomMenu);
/*
<!--
<script src="menu.js"></script>
<custom-menu></custom-menu>
const customCustomMenu = document.querySelector('custom-menu');
-->
*/
class CustomDialog extends HTMLElement {

    constructor() {
        super();

        this.root = this.attachShadow({mode: 'open'});
        this.container = document.createElement('div');
        this.root.appendChild(this.container);

        this.container.innerHTML = CustomDialog.template();


    }


    static get observedAttributes() {
        return ['text'];
    }


    connectedCallback() {
        this.root.querySelector('#close')
            .addEventListener('click', ev => {
                this.remove();
                this.dispatchEvent(new CustomEvent('close'));
            });
        this.root.querySelector('.wrapper')
            .addEventListener('click', ev => {
                this.remove();
                this.dispatchEvent(new CustomEvent('close'));
            });
        this.root.querySelector('.layout')
            .addEventListener('click', ev => {
                ev.stopPropagation();
                this.dispatchEvent(new CustomEvent('close'));
            });
        this.root.querySelector('#submit')
            .addEventListener('click', ev => {
                this.remove();
                this.dispatchEvent(new CustomEvent('submit'));
            });
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {

    }

    static template() {
        return `
        ${CustomDialog.style()}

    <div class="overlay">
    </div>
    <div class="wrapper">
      <div class="layout">
        <div class="content">
          <div class="top">
          <slot></slot>
          </div>
          <div class="buttons">
            <div id="close" class="button">
              取消
            </div>
            <div id="submit" class="button">
              确定
            </div>
          </div>
        </div>
      </div>
    </div>

   `;
    }

    static style() {
        return `
        <style>
.button
{
    margin-bottom: -1px;
    white-space: nowrap;
    flex: 0 0 auto;
    margin-right: 8px;
    min-width: 48px;
    padding: 0 8px;
    line-height: 36px !important;
    text-align: center;
    font-family: Roboto-Medium,HelveticaNeue-Medium,Helvetica Neue,sans-serif-medium,Arial,sans-serif !important;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #4285f4;
}
.buttons
{
    cursor: pointer;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    font-size: small;
    color: #4d5156;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    white-space: normal;
    text-align: left;
    visibility: inherit;
    -webkit-user-select: none;
    display: flex;
    justify-content: flex-end;
    padding: 0 0 8px 0;
}
.top
{
    padding: 24px;
    font-size: 16px;
    overflow-wrap: break-word;
}
.content
{
    max-width: 300px;
    -webkit-user-select: none;
}
.layout
{
    border-radius: 8px;
    position: relative;
    display: inline-block;
    z-index: 1060;
    background-color: #fff;
    vertical-align: middle;
    white-space: normal;
    overflow: hidden;
    transform: translateZ(0);
    box-shadow: 0 5px 26px 0 rgba(0,0,0,.22),0 20px 28px 0 rgba(0,0,0,.3);
    text-align: left;
    opacity: 1;
    visibility: inherit;
    outline: 0;
}
.overlay
{
    position: fixed;
    z-index: 1001;
    right: 0;
    bottom: -200px;
    top: 0;
    left: 0;
    -webkit-transition: opacity .25s;
    background-color: #000;
    opacity: .4;
    visibility: inherit;
}
.wrapper
{
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    z-index: 1002;
    vertical-align: middle;
    white-space: nowrap;
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
    transform: translateZ(0);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-align: center;
    opacity: 1;
    visibility: inherit;
}
.wrapper::after
{
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
        </style>`;
    }


}

customElements.define('custom-dialog', CustomDialog);

/*
<!--
<custom-dialog></custom-dialog>
<script src="components/dialog.js"></script>
const customDialog = document.createElement('custom-dialog');
    const input = document.createElement('input');
    customDialog.appendChild(input);
    customDialog.addEventListener('submit', ev => {
        input.value;
    })
    document.body.appendChild(customDialog);

        const customDialog = document.createElement('custom-dialog');
    const div = document.createElement('div');
    div.textContent = '您确定要停课吗？';
    customDialog.appendChild(div);
    customDialog.addEventListener('submit', ev => {
       
    })
    document.body.appendChild(customDialog);
-->
 */
let baseUri = window.location.hostname === 'localhost' ? 'http://localhost:9000' : '';

const section = document.querySelector('.section');
const customMenu = document.querySelector('custom-menu');

const customSearch = document.querySelector('custom-search');

customSearch.addEventListener('submit', evt => {
    evt.stopPropagation();
    render(_users.filter(x => fuzzysearch(evt.detail, x.nick_name)))
});


let _users = [];


initializeContextMenu();

loadData();


//-------------------------------------------------------------------
async function fetchUsers() {
    const obj = await fetch(`${baseUri}/api/user?mode=3`);
    return await obj.json();
}

function fuzzysearch(needle, haystack) {
    var hlen = haystack.length;
    var nlen = needle.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needle === haystack;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needle.charCodeAt(i);
        while (j < hlen) {
            if (haystack.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}

async function loadData() {
    const users = await fetchUsers();
    _users = users;
    render(users);
}

function render(users) {
    section.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < users.length; i++) {
        const t = new Date(users[i].creation_time * 1000)
        let subtitle = `${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日`;
        if (users[i].booked) {
            subtitle += ` • 已约 ${users[i].booked} 次`;
        }
        const template = `
    <div class="item" data-id="${users[i].id}">
      <img src="${users[i].avatar_url}"  class="item-avatar" />
      <div class="item-main">
        <div class="item-title">
          ${users[i].nick_name}
        </div>
        <div style="line-height: 20px; font-size: 14px; color: #3c4043; margin-top: 2px;">
          ${subtitle}
        </div>
      </div>
      <div class="item-right">
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
          </path>
        </svg>
      </div>
    </div>
  <hr class="separator">
  `;
        const div = document.createElement('div');
        div.innerHTML = template;
        fragment.appendChild(div);
        div.querySelector('.item-right')
            .addEventListener('click', evt => {
                evt.stopPropagation();
                const rect = evt.currentTarget.getBoundingClientRect();
                console.log(customMenu.getBoundingClientRect())
                customMenu.style.display = 'block';
                customMenu.style.right = '16px';
                customMenu.dataset.id = users[i].id;
                if (rect.top + 135 < window.innerHeight)
                    customMenu.style.top = rect.top + 'px';
                else
                    customMenu.style.top = rect.top + 'px';
            })
    }
    section.appendChild(fragment);
    [...document.querySelectorAll('.item')].forEach(x => {
        x.addEventListener('click', evt => {
            window.location.href = `./admin.user?id=${evt.currentTarget.dataset.id}`
        })
    })
}

function initializeContextMenu() {
    window.addEventListener('scroll', evt => {
        customMenu.style.display = 'none';
    })
    document.addEventListener('click', evt => {
        customMenu.style.display = 'none';
    });
    customMenu.addEventListener('click', evt => {
        evt.stopPropagation();
    });
    customMenu.insertItem(`<svg viewBox="0 0 24 24">
        <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
    </svg>`, '删除', evt => {
        customMenu.style.display = 'none';
        askDeleteUser();
    })
}

function askDeleteUser() {
    const customDialog = document.createElement('custom-dialog');
    const div = document.createElement('div');
    div.textContent = `您确定要删除该用户吗？`;
    customDialog.appendChild(div);
    customDialog.addEventListener('submit', ev => {
        executeDeleteUser(customMenu.dataset.id);
    })
    document.body.appendChild(customDialog);
}

async function executeDeleteUser(id) {
    const response = await fetch(`${baseUri}/api/user?id=${id}`, { method: 'DELETE' });
    await response.text();
    loadData();
}
