
function Portfolio({Name,ImageLink, Profession, AwardsNum, Awards, Discovered}) {
  return (
<section className="profile">
        <h2>{Name}</h2>
        <img
          className="avatar"
          src={ImageLink}
          alt={Name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {Profession}
          </li>
          <li>
            <b>{"Awards: " + AwardsNum} </b>
            ({Awards})
          </li>
          <li>
            <b>Discovered: </b>
            {Discovered}
          </li>
        </ul>
      </section>
  );
}




export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>


      <Portfolio
        Name = {'Maria Skłodowska-Curie'}
        ImageLink= {'https://i.imgur.com/szV5sdGs.jpg'}
        Profession= {'physicist and chemist'}
        AwardsNum={4}
        Awards={'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'}
        Discovered={'polonium (element)'}
        />

      <Portfolio
        Name = {'Katsuko Saruhashi'}
        ImageLink= {'https://i.imgur.com/YfeOqp2s.jpg'}
        Profession= {'geochemist'}
        AwardsNum={2}
        Awards={'Miyake Prize for geochemistry, Tanaka Prize'}
        Discovered={'a method for measuring carbon dioxide in seawater'}
        />


    </div>
  );
}
