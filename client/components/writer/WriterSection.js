import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import WriterCard from "./Card"

const WriterSection = ({ writers }) => {
  return (
    <Container maxWidth='100%' disableGutters sx={{ display: "flex", flexDirection: "column", gap: "30px", justifyContent: "start" }}>
            {
              !writers[0] ?
                <Typography variant="caption">No writers found, sorry!</Typography>
                :
                writers.map((writer, index) => (
                  <WriterCard
                    key={writer._id}
                    writer={writer}
                    place={index + 1}
                  />
                ))
            }
      </Container>
  )
}

export default WriterSection