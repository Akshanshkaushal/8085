let r,W=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});W.decode();let h=null;function g(){return(h===null||h.buffer!==r.memory.buffer)&&(h=new Uint8Array(r.memory.buffer)),h}function b(e,t){return W.decode(g().subarray(e,e+t))}const p=new Array(32).fill(void 0);p.push(void 0,null,!0,!1);let d=p.length;function u(e){d===p.length&&p.push(p.length+1);const t=d;return d=p[t],p[t]=e,t}function c(e){return p[e]}function x(e){e<36||(p[e]=d,d=e)}function A(e){const t=c(e);return x(e),t}function E(e,t){if(!(e instanceof t))throw new Error(`expected instance of ${t.name}`);return e.ptr}let y=null;function w(){return(y===null||y.buffer!==r.memory.buffer)&&(y=new Int32Array(r.memory.buffer)),y}let j=0,m=new TextEncoder("utf-8");const R=typeof m.encodeInto=="function"?function(e,t){return m.encodeInto(e,t)}:function(e,t){const n=m.encode(e);return t.set(n),{read:e.length,written:n.length}};function k(e,t,n){if(n===void 0){const s=m.encode(e),f=t(s.length);return g().subarray(f,f+s.length).set(s),j=s.length,f}let a=e.length,_=t(a);const i=g();let o=0;for(;o<a;o++){const s=e.charCodeAt(o);if(s>127)break;i[_+o]=s}if(o!==a){o!==0&&(e=e.slice(o)),_=n(_,a,a=o+e.length*3);const s=g().subarray(_+o,_+a);o+=R(e,s).written}return j=o,_}function S(e,t){return g().subarray(e/1,e/1+t)}function M(e){try{const o=r.__wbindgen_add_to_stack_pointer(-16);var t=k(e,r.__wbindgen_malloc,r.__wbindgen_realloc),n=j;r.parse_wasm(o,t,n);var a=w()[o/4+0],_=w()[o/4+1],i=S(a,_).slice();return r.__wbindgen_free(a,_*1),i}finally{r.__wbindgen_add_to_stack_pointer(16)}}let v=32;function U(e){if(v==1)throw new Error("out of js stack");return p[--v]=e,v}class l{static __wrap(t){const n=Object.create(l.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();r.__wbg_memory_free(t)}static new(t){var n=r.memory_new(t);return l.__wrap(n)}size(){var t=r.memory_size(this.ptr);return t}write(t,n){r.memory_write(this.ptr,t,n)}read(t){var n=r.memory_read(this.ptr,t);return n}display(t){r.memory_display(this.ptr,t)}static new_from_js(t,n){try{var a=r.memory_new_from_js(U(t),n);return l.__wrap(a)}finally{p[v++]=void 0}}}class O{static __wrap(t){const n=Object.create(O.prototype);return n.ptr=t,n}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();r.__wbg_pp8085_free(t)}static new(){var t=r.pp8085_new();return O.__wrap(t)}run(){r.pp8085_run(this.ptr)}run_next(){r.pp8085_run_next(this.ptr)}add_io_port(t){r.pp8085_add_io_port(this.ptr,t)}remove_io_port(t){r.pp8085_remove_io_port(this.ptr,t)}load_memory(t){E(t,l);var n=t.ptr;t.ptr=0,r.pp8085_load_memory(this.ptr,n)}read_io(t){var n=r.pp8085_read_io(this.ptr,t);return n}write_io(t,n){r.pp8085_write_io(this.ptr,t,n)}get_summary(){try{const a=r.__wbindgen_add_to_stack_pointer(-16);r.pp8085_get_summary(a,this.ptr);var t=w()[a/4+0],n=w()[a/4+1];return b(t,n)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n)}}get_memory_ptr(){var t=r.pp8085_get_memory_ptr(this.ptr);return t}get_io_ports(){var t=r.pp8085_get_io_ports(this.ptr);return A(t)}get_a(){var t=r.pp8085_get_a(this.ptr);return t}get_f(){var t=r.pp8085_get_f(this.ptr);return t}get_b(){var t=r.pp8085_get_b(this.ptr);return t}get_c(){var t=r.pp8085_get_c(this.ptr);return t}get_d(){var t=r.pp8085_get_d(this.ptr);return t}get_e(){var t=r.pp8085_get_e(this.ptr);return t}get_h(){var t=r.pp8085_get_h(this.ptr);return t}get_l(){var t=r.pp8085_get_l(this.ptr);return t}get_sp(){var t=r.pp8085_get_sp(this.ptr);return t}get_pc(){var t=r.pp8085_get_pc(this.ptr);return t}get_ir(){var t=r.pp8085_get_ir(this.ptr);return t}get_hlt(){var t=r.pp8085_get_hlt(this.ptr);return t!==0}reset(){r.pp8085_reset(this.ptr)}}async function I(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(a){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}async function T(e){typeof e>"u"&&(e=new URL("/8085/assets/pp8085_lib_bg.0f5221cd.wasm",self.location));const t={};t.wbg={},t.wbg.__wbindgen_string_new=function(_,i){var o=b(_,i);return u(o)},t.wbg.__wbindgen_json_parse=function(_,i){var o=JSON.parse(b(_,i));return u(o)},t.wbg.__wbindgen_object_drop_ref=function(_){A(_)},t.wbg.__wbg_new_59cb74e423758ede=function(){var _=new Error;return u(_)},t.wbg.__wbg_stack_558ba5917b466edd=function(_,i){var o=c(i).stack,s=k(o,r.__wbindgen_malloc,r.__wbindgen_realloc),f=j;w()[_/4+1]=f,w()[_/4+0]=s},t.wbg.__wbg_error_4bb6c2a97407129a=function(_,i){try{console.error(b(_,i))}finally{r.__wbindgen_free(_,i)}},t.wbg.__wbg_buffer_397eaa4d72ee94dd=function(_){var i=c(_).buffer;return u(i)},t.wbg.__wbg_new_a7ce447f15ff496f=function(_){var i=new Uint8Array(c(_));return u(i)},t.wbg.__wbg_set_969ad0a60e51d320=function(_,i,o){c(_).set(c(i),o>>>0)},t.wbg.__wbg_length_1eb8fc608a0d4cdb=function(_){var i=c(_).length;return i},t.wbg.__wbindgen_throw=function(_,i){throw new Error(b(_,i))},t.wbg.__wbindgen_rethrow=function(_){throw A(_)},t.wbg.__wbindgen_memory=function(){var _=r.memory;return u(_)},(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:a}=await I(await e,t);return r=n.exports,T.__wbindgen_wasm_module=a,r}export{l as Memory,O as PP8085,T as default,M as parse_wasm};
