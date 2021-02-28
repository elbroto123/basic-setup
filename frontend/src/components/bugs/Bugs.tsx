import { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button"
import { IBug } from "../../interfaces/IBug"
import BugTable from "./BugTable"
import BugAddModal from "./BugAddModal"
import BugDetailsModal from "./BugDetailsModal"

interface Props {
}

const Bugs = ({}: Props) => {
    
  // State for the bug list that gets rendered in the BugTable
  const [bugs, setBugs] = useState<IBug[]>([]);

  // State for the current selected bug, TODO check if this is necessary or if there is a better way
  const [selectedBug, setSelectedBug] = useState<IBug>();

  // Fetch all bugs when the site is loaded and set the state
  useEffect(() => {
    const getbugs = async () => {
      const bugsFromServer: IBug[] = await fetchBugs();
      setBugs(bugsFromServer);
    }

    getbugs();
  }, [])

  // Fetch bugs
  const fetchBugs = async () => {
    const res = await fetch("http://localhost:8080/bugs");
    const data: IBug[] = await res.json();

    return data;
  }

  // Fetch bug
  const fetchBug = async (id: number) => {
    const res = await fetch(`http://localhost:8080/bugs/${id}`);
    const data: IBug = await res.json();

    return data;
  }

  // Add bug
  const addBug = async (bug: IBug) => {
    const res = await fetch("http://localhost:8080/bugs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bug)
    });

    const data: IBug = await res.json();

    setBugs([...bugs, data]);
    // Close the modal
    setBugAddModalOpen(false);
  }

  // Update bug
  const updateBug = async (bug: IBug) => {
    if(selectedBug != null){
      const resFromServer = await fetch(`http://localhost:8080/bugs/${selectedBug!.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bug),
      })

      // If the server responds with true update the bugs list state and selected bug state
      if(resFromServer){
        const updatedBugFromServer: IBug = await resFromServer.json();
        // Update state bug list
        setBugs(bugs.map((bug) => {
          if(bug.id === updatedBugFromServer.id){
            bug = updatedBugFromServer;
          }
          return bug;
        }));
        // Update state selected bug
        setSelectedBug(updatedBugFromServer);
        // Close the modal
        setBugDetailsModalOpen(false);
      }
    }else{
      // TODO error handling
      console.log("Bugs.tsx: error");
    }
  }

  // Delete bug
  const deleteBug = async () => {
    if(selectedBug != null){
      const resFromServer = await fetch(`http://localhost:8080/bugs/${selectedBug!.id}`, {
        method: "DELETE"
      })
      
      // If the server responds with true remove the entry from the state bugs list and state selectedBug
      if(resFromServer){
        // Update state bug list
        setBugs(bugs.filter((bug) => {
          return bug.id !== selectedBug!.id
        }))
        // Update state selected bug to undefined because the selected bug got deleted
        setSelectedBug(undefined);
        // Close the modal
        setBugDetailsModalOpen(false);
      }
    }
  }

  // State for the child BugAddModal to change the visibility of the modal onClick
  const [bugAddModalOpen, setBugAddModalOpen] = useState(false);
  const toggleBugAddModal = () => {
      setBugAddModalOpen(!bugAddModalOpen);
  }

  // State for the child BugDetailsModal to change the visibility of the modal onClick
  const [bugDetailsModalOpen, setBugDetailsModalOpen] = useState(false);
  const toggleBugDetailsModal = () => {
      setBugDetailsModalOpen(!bugDetailsModalOpen);
  }
  // Get the bug that the user clicked on
  const openBugDetailsModal = (id: number) => {
    // First set the selected bug to the state then open the modal
    const clickedBug = bugs.find(bug => id === bug.id);
    if(clickedBug != null){
      setSelectedBug(clickedBug);
    }else{
      // TODO error handling
      console.log("Bugs.tsx: error");
    }
    setBugDetailsModalOpen(true);
  }

    return (
        <>
            <Button variant="contained" color="primary" onClick={toggleBugAddModal}>Add</Button>
            <BugTable bugs={bugs} openBugDetailsModal={openBugDetailsModal}></BugTable>
            <BugAddModal bugAddModalOpen={bugAddModalOpen} handleBugAddModalClose={toggleBugAddModal} addBug={addBug}></BugAddModal>
            <BugDetailsModal bugDetailsModalOpen={bugDetailsModalOpen} handleBugDetailsModalClose={toggleBugDetailsModal} clickedBug={selectedBug!} updateBug={updateBug} deleteBug={deleteBug}></BugDetailsModal>
        </>
    )
}

export default Bugs
