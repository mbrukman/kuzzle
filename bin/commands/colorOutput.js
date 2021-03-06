/*
 * Kuzzle, a backend software, self-hostable and ready to use
 * to power modern apps
 *
 * Copyright 2015-2018 Kuzzle
 * mailto: support AT kuzzle.io
 * website: http://kuzzle.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const clc = require('cli-color');

class ColorOutput {
  constructor (opts) {
    // /!\ "opts" might be a string
    const noColors = typeof opts === 'object' && opts.parent && opts.parent.noColors;

    this.error = string => noColors ? string : clc.red(string);
    this.warn = string => noColors ? string : clc.yellow(string);
    this.notice = string => noColors ? string : clc.cyanBright(string);
    this.ok = string => noColors ? string: clc.green.bold(string);
    this.question = string => noColors ? string : clc.whiteBright(string);
    this.kuz = string => noColors ? string : clc.greenBright.bold(string);
  }
}

module.exports = ColorOutput;
