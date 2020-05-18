package com.pfa.AppRecrutement.model;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@Table(name = "Candidature", uniqueConstraints = {

        @UniqueConstraint(columnNames = {
                "id"
        })
})
public class Candidature  {




    @Id @GeneratedValue(strategy=GenerationType.IDENTITY) //strategie de generation de la clé primaire
    private Long id;

    private Date dateDepot;

    @ManyToOne
    private User user;

    //@ManyToOne
    //private CV cv;

    public Candidature() { super(); }




    public Long       getId            () { return this.id;	            }
    public Date       getDateDepot     () { return this.dateDepot;      }

    public User   getUser    () { return this.user;       }
    //public CV getCV   () { return this.cv;     }




    public void setId             (Long       pId            ) { this.id             = pId;             }
    public void setDateDepot      (Date       pDateDepot     ) { this.dateDepot      = pDateDepot;      }

    public void setUser       (User   user    ) { this.user       = user;       }
    //public void setCV    (CV cv ) { this.cv     = cv;     }
 }


