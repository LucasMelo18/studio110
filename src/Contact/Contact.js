import React from 'react';

import './Contact.css';


function Contact() {
  return (
    <div className="contact">
      <form id="gform" method="POST" class="pure-form pure-form-stacked" data-email="from_email@example.com" action="https://script.google.com/macros/s/AKfycbx4JjQ8D7EAN0DxVODUfHabpr2A9BePU45Pv9tC/exec">
          <input id="name" name="name" placeholder="Digite seu nome aqui" />
          <textarea id="message" name="message" rows="10" placeholder="Digite sua mensagem"></textarea>
          <input id="email" name="email" type="text" required placeholder="Digite seu email a qui" />

          <button class="button-success pure-button button-xlarge">
              <i class="fa fa-paper-plane"></i>&nbsp;Send
          </button>
      </form>
      <script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/learn-to-send-email-via-google-script-html-no-server/master/form-submission-handler.js"></script>

    </div>
  );
}

export default Contact;
