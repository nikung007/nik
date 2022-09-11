import Link from "next/link";
import React, { useState } from "react";
import Master_Style from '../../styles/master.module.css'

function Index() {

      const [showSubmenu_master, setShowSubmenu_master] = useState(false)
      const clickShowMenu_master = () => {
            setShowSubmenu_master(!showSubmenu_master)
            setShowSubmenu_transation(false)
      }
      const [showSubmenu_transation, setShowSubmenu_transation] = useState(false)
      const clickShowMenu_transation = () => {
            setShowSubmenu_transation(!showSubmenu_transation)
            setShowSubmenu_master(false)
      }
      return (
            <div>
                  <div className={ Master_Style.master_button }>
                        <Link href="/"><button onClick={ () => { setShowSubmenu_master(false); setShowSubmenu_transation(false) } }>Home</button></Link>
                        <button onClick={ clickShowMenu_master }>Master</button>
                        <button onClick={ clickShowMenu_transation }>Transation</button>
                  </div>
                  { showSubmenu_master ?
                        <div className={ Master_Style.master_button_submenu }>
                              <Link href="/master/partyMaster"><button onClick={ clickShowMenu_master }>Party Master</button></Link>
                              <Link href="/master/brokerMaster"><button onClick={ clickShowMenu_master }>Broker Master</button></Link>
                              <Link href="/master/kharchaMaster"><button onClick={ clickShowMenu_master }>Kharcha Master</button></Link>
                              <Link href="/master/articalMaster"><button onClick={ clickShowMenu_master }>Artical Master</button></Link>
                        </div>
                        : null }
                  { showSubmenu_transation ?
                        <div className={ Master_Style.transation_button_submenu }>
                              <Link href="/transation"><button onClick={ clickShowMenu_transation }>Purchase</button></Link>
                              <Link href="/transation"><button onClick={ clickShowMenu_transation }>Sell</button></Link>
                        </div>
                        : null }
            </div>
      );
}

export default Index;
