import { useState } from "react";
const Section = ({ name, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-l">{name}</h1>
      {!isVisible ? (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible(true)}
          >
            Show
          </button>
        </>
      ) : (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("");
  return (
    <>
      <Section
        name={"Instamart About"}
        description={`Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.`}
        isVisible={isVisibleSection === "about"}
        setIsVisible={(bool) =>
          bool ? setIsVisibleSection("about") : setIsVisibleSection("")
        }
      />
      <Section
        name={"Instamart Profile"}
        description={`Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.`}
        isVisible={isVisibleSection === "profile"}
        setIsVisible={(bool) =>
          bool ? setIsVisibleSection("profile") : setIsVisibleSection("")
        }
      />
      <Section
        name={"Instamart Career"}
        description={`Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.`}
        isVisible={isVisibleSection === "career"}
        setIsVisible={(bool) =>
          bool ? setIsVisibleSection("career") : setIsVisibleSection("")
        }
      />
    </>
  );
};
export default Instamart;