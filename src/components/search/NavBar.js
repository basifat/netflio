import React from 'react'


let s2 = {textAlign: 'right'};

export const NavBar = (props) => (


 <table width="100%">
          <tbody>
          <tr className="mui--appbar-height">
            <td className="mui--text-title">Netflio.io</td>
            <td style={s2}>
              <ul className="mui-list--inline mui--text-body2">
                 <li><a href="https://github.com/basifat">About Me</a></li> 
                 <li ><a href="http://www.babatundeasifat.com/">Contact Me</a></li> 
      </ul>
    </td>
  </tr>
  </tbody>
</table>

    )
