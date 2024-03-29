import React from "react"
import pose from "assets/photos/afy_pose.jpg"
import creativity from "assets/photos/nagata_three.jpg"

import "./styles.css"
export const TeachingPhilosophy = () => {
    return (
        <section>
            <div className="teaching-philosophy">
                <div className="section-header">
                    <h1>Teaching Philosophy</h1>
                </div>
                {/* <div className="grid">
                    <div className="body__item">
                        <h3>Creativity</h3>
                        <p>
                            Ms. Liza believes that a clear sense of structure
                            and safety creates a solid foundation from which
                            creative exploration flourishes. When children feel
                            safe and supported, they are able to take risks and
                            push themselves to try new things.
                        </p>
                    </div>
                    <div className="body__item">
                        <h3>Confidence</h3>
                        <p>
                            By moving their bodies big and taking up space,
                            children practice a sense of self-confidence and
                            belief in themselves that transfers to their lives
                            outside dance class.
                        </p>
                    </div>
                </div> */}

                <div className="new-grid">
                    <div>
                        <div>
                            <img src={pose} alt="confidence"></img>
                        </div>
                        <div className="text">
                            <h3>Confidence</h3>
                            <p>
                                By moving their bodies big and taking up space,
                                children practice a sense of self-confidence and
                                belief in themselves that transfers to their
                                lives outside dance class.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={creativity} alt="creativity"></img>
                        </div>
                        <div className="text">
                            <h3>Creativity</h3>
                            <p>
                                Ms. Liza believes that a clear sense of
                                structure and safety creates a solid foundation
                                from which creative exploration flourishes. When
                                children feel safe and supported, they are able
                                to take risks and push themselves to try new
                                things.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
