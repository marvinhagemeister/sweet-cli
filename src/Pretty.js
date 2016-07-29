/*
The MIT License (MIT)
Copyright (c) 2016 Michael Cereda
http://michaelcereda.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import fs from 'fs';
import path from 'path';
// import Map from './map';

const DEFAULTS = {
  template: {}
}



class Pretty {
  /**
   * [constructor description]
   * @param  {[type]} settings  [description]
   * @param  {string|object} settings.template  Name of the template or object
   * @return {[type]}          [description]
   */
  constructor(settings = {}){

    this._stack = [];
    this.settings = {};
    this.templates = [];
    Object.assign(this.settings, DEFAULTS, settings)
    this.addTemplate('default', this.settings.template)
    this.addTemplate('plain', 'plain')
    // this.settings = settings;
  }

  log(content, stackKey){
    if(stackKey) return this.stack(stackKey, content, 'log');
    this._print(content, 'log')
  }

  info(content, stackKey){
    if(stackKey) return this.stack(stackKey, content, 'info');
    this._print(content, 'info')
  }

  error(content, stackKey){
    if(stackKey) return this.stack(stackKey, content, 'error');
    this._print(content, 'error')
  }

  warning(content, stackKey){
    if(stackKey) return this.stack(stackKey, content, 'warning');
    this._print(content, 'warning')
  }

  _print(content, contentType, template='default'){
    const lambda = m => m;

    var template = this.templates[template][contentType]
                  ||
                    this.templates['plain'][contentType]

    console.log(template(content));
  }

  addTemplate(name, obj_or_path){
    if(typeof obj_or_path == 'string'){
      var finalPath;
      try{
        fs.statSync(obj_or_path);
        finalPath = obj_or_path;
      } catch(e){
        finalPath = path.join(__dirname, './templates/'+obj_or_path+'.js');
        try{
          fs.statSync(finalPath);
        } catch(e){

        }
      }
      this.templates[name] = require(finalPath);
    } else {

      this.templates[name] = obj_or_path;
    }

  }

  addCustomMethod(name, fn){
    this[name] = fn;
  }
  /**
   * Stacks saves one or multiple objects in memory and associates them with a
   * key.
   * It can be used with the templates in order to have extreme flexibility
   *
   * @param  {string} key     [description]
   * @param  {object|string} content Contains the message or the object
   * @param  {string} type Type of the message
   * @return {object} Returns content itself
   */
  stack(key, content, type){
    if(!this._stack[key]){
      this._stack[key] = [];
    }
    this._stack[key].push({content:content, type:type})
    return content;
  }

  printStack(key){
    if(this._stack[key]){
      this._stack[key].map((line)=>{
        this[line.type](line.content);
      })
    }
  }
  clearStack(){
    this._stack = {}
  }
}
module.exports = Pretty;
