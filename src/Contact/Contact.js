import React from 'react';

import './Contact.css';


function Contact() {
  return (
    <div className="contact">
      <section>
        <h2>Vamos adorar receber sua mensagem!</h2>
        <form id="gform" method="POST" className="pure-form" data-email="from_email@example.com" action="https://script.google.com/macros/s/AKfycbx4JjQ8D7EAN0DxVODUfHabpr2A9BePU45Pv9tC/exec">
            <div>
              <input id="name" name="name" placeholder="Nome *" />
              <input id="email" name="email" type="text" required placeholder="Email *" />
            </div>
            <div>
              <textarea id="message" name="message" placeholder="Mensagem *"></textarea>
              <button className="button-success pure-button button-xlarge">Enviar </button>
            </div>
        </form>
        <script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/learn-to-send-email-via-google-script-html-no-server/master/form-submission-handler.js"></script>
      </section>
      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.215067673432!2d-46.48851598583214!3d-23.56071808468317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce671a6725e11d%3A0x3b357eacb87a59fa!2sR.+Ces%C3%A1rio+Negri+-+Parque+Savoi+City%2C+S%C3%A3o+Paulo+-+SP%2C+08285-060!5e0!3m2!1sen!2sbr!4v1558533693604!5m2!1sen!2sbr" width="300" height="300" frameBorder="0" allowFullScreen title="maps"/>
        <p>travessa da avenida lá</p>
      </section>
    </div>
  );
}

export default Contact;
