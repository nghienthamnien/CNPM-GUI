package vn.edu.hust.soict.CNPM_HUST_20231.models;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document("food_compositions")
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class FoodComposition {
    @Id
    private String id;
    @Field(name="food_id")
    private Integer foodId;
    @Field(name="food_code")
    private Integer foodCode;
    @Field(name="food_name")
    private String foodName;
    @Field(name="food_jettison")
    private Integer foodJettison;
    private Double water;
    private Double energy;
    private Double protein;
    private Double lipid;
    private Double glucid;
    private Double celluloza;
    private Double tro;
    private Double sugar;
    private Double galactoza;
    private Double maltoza;
    private Double lactoza;
    private Double fructoza;
    private Double glucoza;
    private Double sacaroza;
    private Double calci;
    private Double iron;
    private Double magie;
    private Double mangan;
    private Double phospho;
    private Double kali;
    private Double natri;
    private Double zinc;
    private Double copper;
    private Double selen;
    @Field(name = "vitamin_c")
    private Double vitaminC;
    @Field(name = "vitamin_b1")
    private Double vitaminB1;
    @Field(name = "vitamin_b2")
    private Double vitaminB2;
    @Field(name = "vitamin_pp")
    private Double vitaminPP;
    @Field(name = "vitamin_b5")
    private Double vitaminB5;
    @Field(name = "vitamin_b6")
    private Double vitaminB6;
    private Double folat;
    @Field(name = "vitamin_b9")
    private Double vitaminB9;
    @Field(name = "vitamin_h")
    private Double vitaminH;
    @Field(name = "vitamin_b12")
    private Double vitaminB12;
    @Field(name = "vitamin_a")
    private Double vitaminA;
    @Field(name = "vitamin_d")
    private Double vitaminD;
    @Field(name = "vitamin_e")
    private Double vitaminE;
    @Field(name = "vitamin_k")
    private Double vitaminK;
    @Field(name = "beta_caroten")
    private Double betaCaroten;
    @Field(name = "alpha_caroten")
    private Double alphaCaroten;
    @Field(name = "beta_crypto")
    private Double betaCrypto;
    private Double lycopen;
    @Field(name = "lutein_zeaxan")
    private Double luteinZeaxan;
    private Double purin;
    @Field(name = "sum_isoflavon")
    private Double sumIsoflavon;
    private Double daidzein;
    private Double genistein;
    private Double glycetin;
    @Field(name = "sum_saturat_acid")
    private Double sumSaturatAcid;
    private Double palmitic;
    private Double margaric;
    private Double stearic;
    private Double arachidic;
    private Double behenic;
    private Double lignoceric;
    @Field(name = "sum_mono_acid")
    private Double sumMonoAcid;
    private Double myristoleic;
    private Double palmitoleic;
    private Double oleic;
    @Field(name = "sum_poly_acid")
    private Double sumPolyAcid;
    private Double linoleic;
    private Double linolenic;
    private Double arachidonic;
    private Double eicosapent;
    private Double docosahex;
    @Field(name = "sum_trans_acid")
    private Double sumTransAcid;
    private Double cholesterol;
    private Double phytosterol;
    private Double lysin;
    private Double methionin;
    private Double tryptophan;
    private Double phenylalanin;
    private Double threonin;
    private Double valin;
    private Double leucin;
    private Double isoleucin;
    private Double arginin;
    private Double histidin;
    private Double cystin;
    private Double tyrosin;
    private Double alanin;
    @Field(name = "acid_aspartic")
    private Double acidAspartic;
    @Field(name = "acid_glutamic")
    private Double acidGlutamic;
    private Double glycin;
    private Double prolin;
    private Double serin;
}
