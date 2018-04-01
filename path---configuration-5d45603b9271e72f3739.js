webpackJsonp([65885448531877],{484:function(e,t){e.exports={data:{markdownRemark:{html:'<p>These are all of the available configuration options.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th align="center">Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>async</td>\n<td align="center"><code class="language-text">true</code></td>\n<td>Whether to parse and render the element asynchronously</td>\n</tr>\n<tr>\n<td>allowTaint</td>\n<td align="center"><code class="language-text">false</code></td>\n<td>Whether to allow cross-origin images to taint the canvas</td>\n</tr>\n<tr>\n<td>backgroundColor</td>\n<td align="center"><code class="language-text">#ffffff</code></td>\n<td>Canvas background color, if none is specified in DOM. Set \n<code class="language-text">null</code>\n for transparent</td>\n</tr>\n<tr>\n<td>canvas</td>\n<td align="center"><code class="language-text">null</code></td>\n<td>Existing \n<code class="language-text">canvas</code>\n element to use as a base for drawing on</td>\n</tr>\n<tr>\n<td>foreignObjectRendering</td>\n<td align="center"><code class="language-text">false</code></td>\n<td>Whether to use ForeignObject rendering if the browser supports it</td>\n</tr>\n<tr>\n<td>imageTimeout</td>\n<td align="center"><code class="language-text">15000</code></td>\n<td>Timeout for loading an image (in milliseconds). Set to \n<code class="language-text">0</code>\n to disable timeout.</td>\n</tr>\n<tr>\n<td>ignoreElements</td>\n<td align="center"><code class="language-text">(element) =&gt; false</code></td>\n<td>Predicate function which removes the matching elements from the render.</td>\n</tr>\n<tr>\n<td>logging</td>\n<td align="center"><code class="language-text">true</code></td>\n<td>Enable logging for debug purposes</td>\n</tr>\n<tr>\n<td>onclone</td>\n<td align="center"><code class="language-text">null</code></td>\n<td>Callback function which is called when the Document has been cloned for rendering, can be used to modify the contents that will be rendered without affecting the original source document.</td>\n</tr>\n<tr>\n<td>proxy</td>\n<td align="center"><code class="language-text">null</code></td>\n<td>Url to the \n<a href="/proxy/">proxy</a>\n which is to be used for loading cross-origin images. If left empty, cross-origin images won\'t be loaded.</td>\n</tr>\n<tr>\n<td>removeContainer</td>\n<td align="center"><code class="language-text">true</code></td>\n<td>Whether to cleanup the cloned DOM elements html2canvas creates temporarily</td>\n</tr>\n<tr>\n<td>scale</td>\n<td align="center"><code class="language-text">window.devicePixelRatio</code></td>\n<td>The scale to use for rendering. Defaults to the browsers device pixel ratio.</td>\n</tr>\n<tr>\n<td>useCORS</td>\n<td align="center"><code class="language-text">false</code></td>\n<td>Whether to attempt to load images from a server using CORS</td>\n</tr>\n<tr>\n<td>width</td>\n<td align="center"><code class="language-text">Element</code>\n width</td>\n<td>The width of the \n<code class="language-text">canvas</code></td>\n</tr>\n<tr>\n<td>height</td>\n<td align="center"><code class="language-text">Element</code>\n height</td>\n<td>The height of the \n<code class="language-text">canvas</code></td>\n</tr>\n<tr>\n<td>x</td>\n<td align="center"><code class="language-text">Element</code>\n x-offset</td>\n<td>Crop canvas x-coordinate</td>\n</tr>\n<tr>\n<td>y</td>\n<td align="center"><code class="language-text">Element</code>\n y-offset</td>\n<td>Crop canvas y-coordinate</td>\n</tr>\n<tr>\n<td>scrollX</td>\n<td align="center"><code class="language-text">Element</code>\n scrollX</td>\n<td>The x-scroll position to used when rendering element, (for example if the Element uses \n<code class="language-text">position: fixed</code>\n)</td>\n</tr>\n<tr>\n<td>scrollY</td>\n<td align="center"><code class="language-text">Element</code>\n scrollY</td>\n<td>The y-scroll position to used when rendering element, (for example if the Element uses \n<code class="language-text">position: fixed</code>\n)</td>\n</tr>\n<tr>\n<td>windowWidth</td>\n<td align="center"><code class="language-text">Window.innerWidth</code></td>\n<td>Window width to use when rendering \n<code class="language-text">Element</code>\n, which may affect things like Media queries</td>\n</tr>\n<tr>\n<td>windowHeight</td>\n<td align="center"><code class="language-text">Window.innerHeight</code></td>\n<td>Window height to use when rendering \n<code class="language-text">Element</code>\n, which may affect things like Media queries</td>\n</tr>\n</tbody>\n</table>\n<p>If you wish to exclude certain <code class="language-text">Element</code>s from getting rendered, you can add a <code class="language-text">data-html2canvas-ignore</code> attribute to those elements and html2canvas will exclude them from the rendering.</p>',frontmatter:{title:"Options",description:"Explore the different configuration options available for html2canvas",previousUrl:"/getting-started",previousTitle:"Getting Started",nextUrl:"/features",nextTitle:"Features"}}},pathContext:{slug:"/configuration/"}}}});
//# sourceMappingURL=path---configuration-5d45603b9271e72f3739.js.map