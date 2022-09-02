import { Grid, Button, Typography } from '@mui/material';

const PageTracker = ({ setSearchParams, pageStart, setPageStart, pageNum, totalPages }) => {

    const pageNumArr = []

    for (let i = 1; i <= totalPages; i++) {
        pageNumArr.push(i)
    }
    const pageNumLength = pageNumArr.length >= 10 ? 10 : pageNumArr.length



    const handlePage = (event) => {

        setSearchParams({ page: event.target.value })

        if (event.target.value == pageStart + pageNumLength) {
            if (pageNumArr.length - event.target.value >= 5) {
                setPageStart(pageStart + 5)
            } else {
                setPageStart(pageStart + (pageNumArr.length - event.target.value))
            }
        }
        if (event.target.value - 1 === pageStart) {
            if (pageStart >= 5) {
                setPageStart(pageStart - 5)
            } else {
                setPageStart(0)
            }
        }

    }

    const handleNext = () => {
        if (pageNum < pageNumArr.length) {
            setSearchParams({ page: pageNum + 1 })
            slidePageTrackerForward()
        }
    }

    const slidePageTrackerForward = () => {
        if (pageNum > 5 && pageNum % 5 === 4) {
            if (pageNumArr.length - pageNum >= 5) {
                setPageStart(pageStart + 5)
            } else {
                setPageStart(pageStart + (pageNumArr.length - pageNum - 1))
            }
        }
    }

    const handlePrev = () => {
        if (pageNum > 1) {
            setSearchParams({ page: pageNum - 1 })
            slidePageTrackerBack()
        }
    }

    const slidePageTrackerBack = () => {
        if (pageNum - 2 === pageStart) {
            if (pageStart >= 5) {
                setPageStart(pageStart - 5)
            } else {
                setPageStart(0)
            }
        }
    }



    return (
        <Grid container sx={{ mb: 4 }}>
            <Button onClick={handlePrev}>Previous</Button>
            {pageNumArr.slice(pageStart, pageStart + pageNumLength).map((page) =>


                <Button sx={{
                    backgroundColor: page === pageNum ? '#286E5E' : null,
                    color: page === pageNum ? 'white' : '#286E5E',
                }} onClick={handlePage} value={page} key={page}>{page}</Button>


            )}
            <Button onClick={handleNext}>Next</Button>
        </Grid>
    )
}

export default PageTracker