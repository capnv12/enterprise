import React from 'react'
import {graphql, StaticQuery, Link} from 'gatsby'
import {slide as Menu} from 'react-burger-menu'
import './css/MainMenu.css'

const MainMenu = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter:{
          name:{
            eq:"Main Menu"
          }
        }){
          edges{
            node{
              name
              items{
                title
                object_slug
              }
            }
          }
        }
      }
    `} render={props => (
        <div className="MainMenuWrapper">
            <div className="MainMenuInner">
                <Menu noOverlay className="bg-menu" right>
                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item=>(
                        <Link className="bm-item-list" to={item.object_slug} key={item.title} activeClassName="active">{item.title}</Link>
                    ))}
                </Menu>
            </div>
        </div>
    )}/>
);

export default MainMenu;

