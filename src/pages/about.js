import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { contributors, annotators } from "../models/information"

const renderPerson = a =>
  a.url ? (
    <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
      {a.name}
    </a>
  ) : (
    a.name 
  )

const ContributorSection = ({ name, contributors }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3 style={{ margin: 0 }}>{name}</h3>
        {
          contributors
          .sort((a, b) => (a.name).localeCompare(b.name))
            .map(a => renderPerson(a))
            .reduce((prev, curr) => [prev, ", ", curr])
        }
    </div>
  )
}

const AboutPage = () => {
  const processed_annotators = annotators.map( (a) => {
    return {name: a}
  })

  return <Layout>
    <SEO title="เกี่ยวกับ Parliament Listening" />
    <h2>เกี่ยวกับ Parliament Listening</h2>
    <p>
      หลังเลือกตั้งและจัดตั้งครม. ก็เริ่มมีการประชุมสภาเกิดขึ้นหลายครั้ง แต่ละครั้งใช้เวลานานและมีหลายประเด็นเกิดขึ้นในระหว่างการประชุม
      ELECT จึงได้ทดลองพัฒนาแพลตฟอร์มให้เลือกดูประชุมสภาย้อนหลังกันง่ายๆ โดยในเวอร์ชั่นทดสอบ สามารถดูสถิติภาพรวมและเลือกดูรายบุคคลได้
      และในเวอร์ชั่นต่อๆ ไป คาดว่าจะเพิ่มเติมข้อมูลจากการประชุมครั้งอื่นๆ พร้อมเพิ่มตัวเลือกต่างๆ
      รวมถึงไฮไลท์ของการประชุมแต่ละครั้ง เพื่อให้ดูย้อนหลังได้ว่า <b>"ใครเคยพูดอะไรไว้บ้าง"</b>
    </p>
    <p>
      รายละเอียดเพิ่มเติมเกี่ยวกับข้อมูลและการพัฒนา สามารถดูได้ที่ {` `}
      <b>
        <a href="https://github.com/codeforthailand/parliament-listening">github.com/codeforthailand/parliament-listening</a>
      </b>
    </p>
    <p>
      หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ {` `}
      <b>
        <a href="http://m.me/elect.in.th">m.me/elect.in.th</a> 
      </b> หรือ {` `}
      <b>
        <a href="mailto:contact@elect.in.th">contact@elect.in.th</a>
      </b>
    </p>
    <h2 css={{marginBottom: `10px`}}>อาสาสมัครที่ร่วมพัฒนา</h2>
    <div><b>หมายเหตุ:</b> รายชื่อเรียงตามตัวอักษร</div>
    <br/>
    <div id="contributors">
      <ContributorSection
        name="ผู้บันทึกเวลา ⌛"
        contributors={processed_annotators}
      />
      <ContributorSection
        name="เขียนโปรแกรม 💻"
        contributors={contributors.coders}
      />
      <ContributorSection
        name="ออกแบบ 🎨"
        contributors={contributors.designers}
      />
      <ContributorSection
        name="ติดต่อประสานงาน และด้านอื่นๆ ☎️"
        contributors={contributors.others}
      />
    </div>
  </Layout>
}

export default AboutPage
