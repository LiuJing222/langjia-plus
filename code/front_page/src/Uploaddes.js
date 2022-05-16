// import io from 'socket.io-client'
// // import { getToken } from '@/utils/storage'
// import { useRef, useState, useEffect } from 'react'
// import 'Uploaddes.css';
// const Uploaddes = () => {
//     const [val,setVal] = useState('');
//     const send = ()=>{
//         if(val){
//             const obj = {send:'1537523736@qq.com',get:'2509465033@qq.com',value:val};
//             socket.emit('client', JSON.stringify(obj));
//             setVal('');
//         }
//     }
//     return (
//         <div>
//             <ul id="messages"></ul>
//             <form id="form" action="">
//                 <input id="input" autocomplete="off" value={val} onChange={(e)=>setVal(e.target.value)}/><button onClick={send}>Send</button>
//             </form>
//         </div>
//     )
// }
// export default Uploaddes