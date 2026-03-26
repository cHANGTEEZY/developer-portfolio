import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <Image
        src={"/VBEE_dark.png"}
        alt={"VBEE Logo"}
        width={100}
        height={100}
      />
      <div>
        <h2>Need a Development Partner?</h2>
        <p>
          <Link href={"/contact"}>Let&apos;s Talk</Link>
        </p>
      </div>
    </nav>
  )
}

export default Navbar
