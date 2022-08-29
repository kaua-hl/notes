import styles from "./Feed.module.css";
import { EditorWysiwyg } from "../../components/EditorWysiwyg/EditorWysiwyg";
import { UserNotes } from "../../components/Notes/UserNotes";

export const Feed = () => {
    return (
        <div className={`${styles.feed} container`}>
            <div>
                <UserNotes />
                <UserNotes />
            </div>
            <EditorWysiwyg />
        </div>
    );
};