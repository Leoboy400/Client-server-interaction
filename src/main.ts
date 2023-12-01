import './style.css'
import { showImg } from './showImg';
import { IObjectWiki } from './interfaceTs';
import { createForm } from './createForm';
import { addContent } from './addContent';
import { addValueInputEndSendForm } from './sendForm'
import { showDataFromMongo } from './showDataFromMongo';
// showImg('https://upload.wikimedia.org/wikipedia/commons/2/25/WHATWG_Fetch_logo.svg')


function wiki() {
  showDataFromMongo()
  createForm()
  addValueInputEndSendForm()
}

wiki()