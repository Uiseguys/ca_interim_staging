import React from 'react'
import Project from './Project.js'
import styles from "./components.module.css"

class ProjectList extends React.Component {
  render () {
    return (
      <div className={styles.col11}>
        <Project hasPics={true} date1="16.03. -" date2="20.04.2018" title1="black | sea" title2="68projects" title3="Berlin" />
        <Project hasPics={false} date1="19.04. -" date2="22.04.2018" title1="Art Cologne" title2="with Galerie Ludorff" title3="Cologne" />
        <Project hasPics={false} date1="21.04. -" date2="02.09.2018" title1="Sezon Museum of" title2="Modern Art" title3="Karuizawa, Japan" />
        <Project hasPics={false} date1="27.04. -" date2="29.04.2018" title1="Gallery" title2="Weekend Berlin" title3="Open Studio" />
      </div>
    )
  }
}

export default ProjectList
