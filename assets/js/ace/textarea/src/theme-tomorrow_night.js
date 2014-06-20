/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

__ace_shadowed__.define('ace/theme/tomorrow_night', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) ***REMOVED***

exports.isDark = true;
exports.cssClass = "ace-tomorrow-night";
exports.cssText = ".ace-tomorrow-night .ace_gutter ***REMOVED***\
background: #25282c;\
color: #C5C8C6\
***REMOVED***\
.ace-tomorrow-night .ace_print-margin ***REMOVED***\
width: 1px;\
background: #25282c\
***REMOVED***\
.ace-tomorrow-night ***REMOVED***\
background-color: #1D1F21;\
color: #C5C8C6\
***REMOVED***\
.ace-tomorrow-night .ace_cursor ***REMOVED***\
color: #AEAFAD\
***REMOVED***\
.ace-tomorrow-night .ace_marker-layer .ace_selection ***REMOVED***\
background: #373B41\
***REMOVED***\
.ace-tomorrow-night.ace_multiselect .ace_selection.ace_start ***REMOVED***\
box-shadow: 0 0 3px 0px #1D1F21;\
border-radius: 2px\
***REMOVED***\
.ace-tomorrow-night .ace_marker-layer .ace_step ***REMOVED***\
background: rgb(102, 82, 0)\
***REMOVED***\
.ace-tomorrow-night .ace_marker-layer .ace_bracket ***REMOVED***\
margin: -1px 0 0 -1px;\
border: 1px solid #4B4E55\
***REMOVED***\
.ace-tomorrow-night .ace_marker-layer .ace_active-line ***REMOVED***\
background: #282A2E\
***REMOVED***\
.ace-tomorrow-night .ace_gutter-active-line ***REMOVED***\
background-color: #282A2E\
***REMOVED***\
.ace-tomorrow-night .ace_marker-layer .ace_selected-word ***REMOVED***\
border: 1px solid #373B41\
***REMOVED***\
.ace-tomorrow-night .ace_invisible ***REMOVED***\
color: #4B4E55\
***REMOVED***\
.ace-tomorrow-night .ace_keyword,\
.ace-tomorrow-night .ace_meta,\
.ace-tomorrow-night .ace_storage,\
.ace-tomorrow-night .ace_storage.ace_type,\
.ace-tomorrow-night .ace_support.ace_type ***REMOVED***\
color: #B294BB\
***REMOVED***\
.ace-tomorrow-night .ace_keyword.ace_operator ***REMOVED***\
color: #8ABEB7\
***REMOVED***\
.ace-tomorrow-night .ace_constant.ace_character,\
.ace-tomorrow-night .ace_constant.ace_language,\
.ace-tomorrow-night .ace_constant.ace_numeric,\
.ace-tomorrow-night .ace_keyword.ace_other.ace_unit,\
.ace-tomorrow-night .ace_support.ace_constant,\
.ace-tomorrow-night .ace_variable.ace_parameter ***REMOVED***\
color: #DE935F\
***REMOVED***\
.ace-tomorrow-night .ace_constant.ace_other ***REMOVED***\
color: #CED1CF\
***REMOVED***\
.ace-tomorrow-night .ace_invalid ***REMOVED***\
color: #CED2CF;\
background-color: #DF5F5F\
***REMOVED***\
.ace-tomorrow-night .ace_invalid.ace_deprecated ***REMOVED***\
color: #CED2CF;\
background-color: #B798BF\
***REMOVED***\
.ace-tomorrow-night .ace_fold ***REMOVED***\
background-color: #81A2BE;\
border-color: #C5C8C6\
***REMOVED***\
.ace-tomorrow-night .ace_entity.ace_name.ace_function,\
.ace-tomorrow-night .ace_support.ace_function,\
.ace-tomorrow-night .ace_variable ***REMOVED***\
color: #81A2BE\
***REMOVED***\
.ace-tomorrow-night .ace_support.ace_class,\
.ace-tomorrow-night .ace_support.ace_type ***REMOVED***\
color: #F0C674\
***REMOVED***\
.ace-tomorrow-night .ace_heading,\
.ace-tomorrow-night .ace_markup.ace_heading,\
.ace-tomorrow-night .ace_string ***REMOVED***\
color: #B5BD68\
***REMOVED***\
.ace-tomorrow-night .ace_entity.ace_name.ace_tag,\
.ace-tomorrow-night .ace_entity.ace_other.ace_attribute-name,\
.ace-tomorrow-night .ace_meta.ace_tag,\
.ace-tomorrow-night .ace_string.ace_regexp,\
.ace-tomorrow-night .ace_variable ***REMOVED***\
color: #CC6666\
***REMOVED***\
.ace-tomorrow-night .ace_comment ***REMOVED***\
color: #969896\
***REMOVED***\
.ace-tomorrow-night .ace_indent-guide ***REMOVED***\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
***REMOVED***";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
***REMOVED***);