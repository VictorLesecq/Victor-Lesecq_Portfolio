import Card from '../components/Card/Card';

const Projects = () => {
     return (
          <>
               <div className="w-32 h-32"></div>
               <div className="grid grid-cols-7 grid-rows-[repeat(16,1fr)] max-w-4xl mx-auto">
                    {/* <Card
                         orientation={{
                              defaultRX: 30,
                              defaultRY: 10,
                              defaultOffset: 8,
                              defaultRZ: -22,
                         }}
                         gridPosition={{
                              rowStart: 6,
                              colStart: 4,
                         }}
                         movement={false}
                         iteration={1}
                    /> */}
                    <Card
                         orientation={{
                              defaultRX: 20,
                              defaultRY: -20,
                              defaultOffset: 10,
                              defaultRZ: 20,
                         }}
                         gridPosition={{
                              rowStart: 1,
                              colStart: 6,
                         }}
                         //  movement={true}
                         iteration={2}
                    />
                    <Card
                         orientation={{
                              defaultRX: 30,
                              defaultRY: 20,
                              defaultOffset: 8,
                              defaultRZ: -15,
                         }}
                         gridPosition={{
                              rowStart: 5,
                              colStart: 1,
                         }}
                         //  movement={true}
                         iteration={2}
                    />
                    <Card
                         orientation={{
                              defaultRX: 25,
                              defaultRY: -20,
                              defaultOffset: 10,
                              defaultRZ: 25,
                         }}
                         gridPosition={{
                              rowStart: 10,
                              colStart: 7,
                         }}
                         //  movement={true}
                         iteration={2}
                    />
               </div>
          </>
     );
};

export default Projects;
