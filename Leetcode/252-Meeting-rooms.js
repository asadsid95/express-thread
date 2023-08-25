function meeting(schedule) {

    schedule.sort((meeting_1 , meeting_2) => 
    meeting_1[0] - meeting_2[0])

    // console.log(schedule)

    let comparison_list = [schedule[0]]
    
    // iterate over remaining schedule
    for (let i=1; i<schedule.length;i++){
        
        const specific_meeting = schedule[i]
        const compare=comparison_list[0]
        // console.log(compare)
        
        // console.log(specific_meeting[0])

        // check if specific meeting's start time is between start and end of compare meeting's; return false
        if((compare[0] < specific_meeting[0]) && (compare[1] > specific_meeting[1]) ){

            return false
            // console.log(compare[0])
            // console.log(specific_meeting[0])
            // console.log(specific_meeting[1])
            
            // console.log('False; compare sched is before meeting start')
        } else {

            next()
            // console.log(compare[0])
            // console.log(specific_meeting[0])
            // console.log(specific_meeting[1])
            // console.log('0')
        }
    }

}

var schedule = [[1,5],[5, 8]]
meeting(schedule)