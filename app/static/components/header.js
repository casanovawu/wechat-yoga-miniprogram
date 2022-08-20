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
        this.insertItem("/admin.users", "会员", "M15.984 12.984q1.313 0 2.859 0.375t2.859 1.219 1.313 1.922v2.484h-6v-2.484q0-2.063-1.969-3.469 0.328-0.047 0.938-0.047zM8.016 12.984q1.313 0 2.859 0.375t2.836 1.219 1.289 1.922v2.484h-14.016v-2.484q0-1.078 1.313-1.922t2.859-1.219 2.859-0.375zM8.016 11.016q-1.219 0-2.109-0.891t-0.891-2.109 0.891-2.109 2.109-0.891 2.086 0.891 0.867 2.109-0.867 2.109-2.086 0.891zM15.984 11.016q-1.219 0-2.109-0.891t-0.891-2.109 0.891-2.109 2.109-0.891 2.109 0.891 0.891 2.109-0.891 2.109-2.109 0.891z");
        this.insertDivider();
        this.insertItem();
        this.insertItem("/admin.teachers", "老师", "M9 12.984q1.5 0 3.281 0.422t3.258 1.406 1.477 2.203v3h-16.031v-3q0-1.219 1.477-2.203t3.258-1.406 3.281-0.422zM15 12q-0.609 0-1.313-0.234 1.313-1.547 1.313-3.75 0-0.891-0.375-2.016t-0.938-1.781q0.703-0.234 1.313-0.234 1.641 0 2.813 1.195t1.172 2.836-1.172 2.813-2.813 1.172zM5.016 8.016q0-1.641 1.172-2.836t2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172-2.813-1.172-1.172-2.813zM16.688 13.125q2.484 0.375 4.406 1.383t1.922 2.508v3h-4.031v-3q0-2.297-2.297-3.891z");
        this.insertItem("/admin.cards", "会员卡", "M20.016 8.016v-2.016h-16.031v2.016h16.031zM20.016 18v-6h-16.031v6h16.031zM20.016 3.984q0.844 0 1.406 0.586t0.563 1.43v12q0 0.844-0.563 1.43t-1.406 0.586h-16.031q-0.844 0-1.406-0.586t-0.563-1.43v-12q0-0.844 0.563-1.43t1.406-0.586h16.031z");
        this.insertDivider();
        this.insertItem("/admin.notices", "公告", "M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z");
        this.insertItem("/admin.settings", "设置", "M12 15.516q1.453 0 2.484-1.031t1.031-2.484-1.031-2.484-2.484-1.031-2.484 1.031-1.031 2.484 1.031 2.484 2.484 1.031zM19.453 12.984l2.109 1.641q0.328 0.234 0.094 0.656l-2.016 3.469q-0.188 0.328-0.609 0.188l-2.484-0.984q-0.984 0.703-1.688 0.984l-0.375 2.625q-0.094 0.422-0.469 0.422h-4.031q-0.375 0-0.469-0.422l-0.375-2.625q-0.891-0.375-1.688-0.984l-2.484 0.984q-0.422 0.141-0.609-0.188l-2.016-3.469q-0.234-0.422 0.094-0.656l2.109-1.641q-0.047-0.328-0.047-0.984t0.047-0.984l-2.109-1.641q-0.328-0.234-0.094-0.656l2.016-3.469q0.188-0.328 0.609-0.188l2.484 0.984q0.984-0.703 1.688-0.984l0.375-2.625q0.094-0.422 0.469-0.422h4.031q0.375 0 0.469 0.422l0.375 2.625q0.891 0.375 1.688 0.984l2.484-0.984q0.422-0.141 0.609 0.188l2.016 3.469q0.234 0.422-0.094 0.656l-2.109 1.641q0.047 0.328 0.047 0.984t-0.047 0.984z");
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
