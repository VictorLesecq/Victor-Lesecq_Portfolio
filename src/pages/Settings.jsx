import Card2 from '../components/Card2/Card2';

const Settings = () => {
     return (
          <>
               <div className="w-32 h-32"></div>
               <div className="cards_container grid grid-cols-7 grid-rows-[repeat(16,100px)] max-w-5xl mx-auto">
                    <Card2
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
                         projectId="c67ab8a7"
                         iteration={2}
                    />
                    <Card2
                         orientation={{
                              defaultRX: 30,
                              defaultRY: 20,
                              defaultOffset: 8,
                              defaultRZ: -15,
                         }}
                         gridPosition={{
                              rowStart: 3,
                              colStart: 2,
                         }}
                         projectId="b9123946"
                         iteration={1}
                    />
                    <Card2
                         orientation={{
                              defaultRX: 25,
                              defaultRY: -20,
                              defaultOffset: 10,
                              defaultRZ: 25,
                         }}
                         gridPosition={{
                              rowStart: 5,
                              colStart: 7,
                         }}
                         projectId="46d188c5"
                         iteration={1}
                    />
                    <Card2
                         orientation={{
                              defaultRX: 20,
                              defaultRY: 10,
                              defaultOffset: 6,
                              defaultRZ: -10,
                         }}
                         gridPosition={{
                              rowStart: 7,
                              colStart: 1,
                         }}
                         projectId="7af00cd6"
                         iteration={2}
                    />
               </div>
          </>
     );
};

export default Settings;
