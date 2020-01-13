import NGN from '../core.js'
import { hostname } from './Utility.js'
import Request from './Request.js'
import URL from './URL.js'

export default class Network { // eslint-disable-line
  constructor () {
    Object.defineProperties(this, {
      /**
       * @method normalizeUrl
       * Normalize a URL by removing extraneous characters,
       * applying protocol, and resolving relative links.
       * @param {string} URI
       * The URI to normalize.
       * @return {string}
       * The normalized URL.
       */
      normalizeUrl: NGN.privateconst(url => (new URL(url)).toString({ username: true, password: true, urlencode: false })),

      // Returns a scoped method for sending the request, after preparing it.
      makeRequest: NGN.private((method) => {
        const me = this

        return function () {
          const args = NGN.slice(arguments)
          let callback

          if (NGN.isFn(args[args.length - 1])) {
            callback = args.pop()
          }

          args.push(method)

          // Send the request
          me.send(me.parseRequestConfiguration(...args), callback)
        }
      }),

      parseRequestConfiguration: NGN.define(false, true, false, (cfg, method = 'GET') => {
        if (typeof cfg === 'string') {
          cfg = {
            url: cfg
          }
        }

        cfg = cfg || {}
        cfg.method = method
        cfg.url = NGN.coalesceb(cfg.url, hostname) // eslint-disable-line no-undef

        return new NGN.NET.Request(cfg)
      })
    })

    // Helper aliases (undocumented)
    NGN.createAlias(this, 'OPTIONS', this.options)
    NGN.createAlias(this, 'HEAD', this.head)
    NGN.createAlias(this, 'GET', this.get)
    NGN.createAlias(this, 'POST', this.post)
    NGN.createAlias(this, 'PUT', this.put)
    NGN.createAlias(this, 'DELETE', this.delete)
    NGN.createAlias(this, 'TRACE', this.trace)
    NGN.createAlias(this, 'JSON', this.json)
    NGN.createAlias(this, 'JSONP', this.jsonp)
  }

  get Request () {
    return Request
  }

  /**
   * @method parseRequestConfiguration
   * Prepare common configuration attributes for a request.
   * @return {NGN.NET.Request}
   * @private
   */
  // parseRequestConfiguration (cfg, method = 'GET') {
  //   if (typeof cfg === 'string') {
  //     cfg = {
  //       url: cfg
  //     }
  //   }
  //
  //   cfg = cfg || {}
  //   cfg.method = method
  //   cfg.url = NGN.coalesceb(cfg.url, hostname) // eslint-disable-line no-undef
  //
  //   return new NGN.NET.Request(cfg)
  // }

  /**
   * @method request
   * Send a request. In most cases, it is easier to use one of the built-in
   * request functions (#get, #post, #put, #delete, #json, etc). This method
   * is available for creating custom requests.
   * @param  {Object} configuration
   * Provide a #NGN.NET.Request configuration.
   * @param  {Function} callback
   * The callback to execute when the request is complete.
   */
  request (cfg, callback) {
    cfg = cfg || {}
    cfg.method = NGN.coalesceb(cfg.method, 'GET')

    if (NGN.isFn(this[cfg.method])) {
      this.makeRequest(cfg.method)(...arguments)
    } else {
      this.send(new NGN.NET.Request(cfg), callback)
    }
  }

  /**
   * @method options
   * Issue a `OPTIONS` request.
   * @param {string|object} url
   * The URL to issue the request to, or a configuration object.
   * The configuration object accepts all of the #NGN.NET.Request
   * configuration options (except method, which is defined automatically).
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  options () {
    this.makeRequest('OPTIONS').apply(this, arguments)
  }

  /**
   * @method head
   * Issue a `HEAD` request.
   * @param {string|object} url
   * The URL to issue the request to, or a configuration object.
   * The configuration object accepts all of the #NGN.NET.Request
   * configuration options (except method, which is defined automatically).
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  head () {
    this.makeRequest('HEAD').apply(this, arguments)
  }

  /**
   * @method get
   * Issue a `GET` request.
   * @param {string|object} url
   * The URL to issue the request to.
   * The configuration object accepts all of the #NGN.NET.Request
   * configuration options (except method, which is defined automatically).
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  get () {
    this.makeRequest('GET').apply(this, arguments)
  }

  /**
   * @method post
   * Issue a `POST` request.
   * @param {string|object} url
   * The URL to issue the request to.
   * The configuration object accepts all of the #NGN.NET.Request
   * configuration options (except method, which is defined automatically).
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  post () {
    this.makeRequest('POST').apply(this, arguments)
  }

  /**
   * @method put
   * Issue a `PUT` request.
   * @param {string|object} url
   * The URL to issue the request to.
   * The configuration object accepts all of the #NGN.NET.Request
   * configuration options (except method, which is defined automatically).
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  put () {
    this.makeRequest('PUT').apply(this, arguments)
  }

  /**
   * @method delete
   * Issue a `DELETE` request.
   * @param {string|object} url
   * The URL to issue the request to.
   * The configuration object accepts all of the #NGN.NET.Request
   * configuration options (except method, which is defined automatically).
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  delete () {
    this.makeRequest('DELETE').apply(this, arguments)
  }

  /**
   * @method trace
   * Issue a `TRACE` request. This is a debugging method, which
   * echoes input back to the user. It is a standard HTTP method,
   * but considered a security risk by many practioners and may
   * not be supported by remote hosts.
   * @param {string|object} url
   * The URL to issue the request to.
   * The configuration object accepts all of the #NGN.NET.Request
   * configuration options (except method, which is defined automatically).
   * @param {Function} callback
   * A callback method to run when the request is complete.
   * This receives the response object as the only argument.
   */
  trace () {
    NGN.WARN('NGN.NET.Request.method', 'An HTTP TRACE request was made.')
    this.makeRequest('TRACE').apply(this, arguments)
  }

  /**
   * @method json
   * This is a shortcut method for creating a `GET` request and
   * auto-parsing the response into a JSON object.
   * @param  {string} url
   * The URL to issue the request to.
   * @param  {Function} callback
   * This receives a JSON response object from the server.
   * @param {Error} callback.error
   * If the request cannot be completed for any reason, this argument will be
   * populated with the error. If the request is successful, this will be `null`.
   * @param {Object} callback.data
   * The JSON response from the remote URL.
   */
  json (url, callback) {
    if (!NGN.isFn(callback)) {
      throw new Error('NGN.NET.json requires a callback method.')
    }

    // Request method is "GET"
    const request = this.parseRequestConfiguration({ url })

    this.preflight(request)

    request.send(response => {
      try {
        callback(null, JSON.parse(response.responseText))
      } catch (e) {
        e.response = NGN.coalesce(response.responseText)
        callback(e)
      }
    })
  }

  /**
   * @method jsonp
   * Execute a request via JSONP. JSONP is only available in browser
   * environments, since it's operation is dependent on the existance of
   * the DOM. However; this may work with some headless browsers.
   * @param {string} url
   * The URL of the JSONP endpoint.
   * @param {function} callback
   * Handles the response.
   * @param {Error} callback.error
   * If an error occurred, this will be populated. If no error occurred, this will
   * be null.
   * @param {object|array} callback.response
   * The response.
   * @param {string} [callbackParameter=callback]
   * Optionally specify an alternative callback parameter name. This will be
   * appended to the URL query parameters when the request is made.
   * For example:
   * `https://domain.com?[callbackParameter]=generated_function_name`
   * @environment browser
   */
  jsonp (url, callback, callbackParameter = 'callback') {
    /* node-only */
    NGN.WARN('NET.Request', 'An unsupported JSONP request was made.')
    callback(new Error('JSONP unsupported in Node-like environments.'))
    /* end-node-only */
    /* browser-only */
    if (NGN.isFn(callbackParameter)) {
      callback = callbackParameter
      callbackParameter = 'callback'
    }

    const fn = 'jsonp_callback_' + Math.round(100000 * Math.random())

    window[fn] = (data) => {
      delete window[fn]

      document.body.removeChild(script)

      return callback(null, data)
    }

    const script = document.createElement('script')

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + fn

    script.addEventListener('error', (e) => {
      delete window[fn]

      return callback(new Error('The JSONP request was blocked. This may be the result of an invalid URL, cross origin restrictions, or the remote server may not be online.'))
    })

    document.body.appendChild(script)
    /* end-browser-only */
  }

  // Apply a preflight request option to the network request.
  send (request, callback) {
    this.preflight(request)
    request.send(callback)
  }

  /**
   * @method preflight
   * This is a no-op method that runs before a request is sent.
   * This exists specicially to be overridden by class extensions.
   */
  preflight (request) {}
}
