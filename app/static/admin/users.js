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