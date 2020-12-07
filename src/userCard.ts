const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3 {
            color: coral;
        }
    <div class="user-card">
        <h3></h3>
    </div>
`;
class UserCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        if(this.shadowRoot) this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.innerHTML = `<h3>${this.getAttribute('name')}`;
        if (this.shadowRoot) {
            console.log(this.shadowRoot.querySelector('h3'));
            // if(this.shadowRoot.querySelector('h3'))
            (this.shadowRoot.querySelector('h3') as HTMLHeadElement).innerText = this.getAttribute('name') as string;
        }
    }
}


window.customElements.define('user-card', UserCard);