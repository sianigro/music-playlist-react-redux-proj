//  <nav id="nav">
//   <ul>
//     <li className="current">
//       <a href="index.html">Home</a>
//     </li>
//     <li>
//       <a href="#">Dropdown</a>
//       <ul>
//         <li>
//           <a href="#">Lorem ipsum</a>
//         </li>
//         <li>
//           <a href="#">Magna veroeros</a>
//         </li>
//         <li>
//           <a href="#">Etiam nisl</a>
//         </li>
//         <li>
//           <a href="#">Sed consequat</a>
//           <ul>
//             <li>
//               <a href="#">Lorem dolor</a>
//             </li>
//             <li>
//               <a href="#">Amet consequat</a>
//             </li>
//             <li>
//               <a href="#">Magna phasellus</a>
//             </li>
//             <li>
//               <a href="#">Etiam nisl</a>
//             </li>
//             <li>
//               <a href="#">Sed feugiat</a>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <a href="#">Nisl tempus</a>
//         </li>
//       </ul>
//     </li>
//     <li>
//       <a href="left-sidebar.html">Left Sidebar</a>
//     </li>
//     <li>
//       <a href="right-sidebar.html">Right Sidebar</a>
//     </li>
//     <li>
//       <a href="no-sidebar.html">No Sidebar</a>
//     </li>
//   </ul>
// </nav>

// _________________________________________________________
<div>
  <form onSubmit={this.onSubmit}>
    <TextFieldGroup
      id="username"
      placeholder="Username"
      label="Username"
      name="username"
      type="text"
      value={this.state.username}
      onChange={this.onChange}
      error={errors.username}
    />
    <TextFieldGroup
      id="email"
      placeholder="Email"
      label="Email"
      name="email"
      type="email"
      value={this.state.email}
      onChange={this.onChange}
      error={errors.email}
    />
    <TextFieldGroup
      id="password"
      placeholder="********"
      label="Password"
      name="password"
      type="password"
      value={this.state.password}
      onChange={this.onChange}
      error={errors.password}
    />
    <TextFieldGroup
      id="passwordRepeat"
      placeholder="********"
      label="Repeat Password"
      name="password2"
      type="password"
      value={this.state.password2}
      onChange={this.onChange}
      error={errors.password2}
    />
    <button type="submit" className="btn btn--form">
      Register
    </button>
  </form>
</div>;
