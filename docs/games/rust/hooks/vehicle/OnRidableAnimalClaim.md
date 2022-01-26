---
hide_table_of_contents: true
---

# OnRidableAnimalClaim

## Usage

* Called when a player tries to claim a horse
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnRidableAnimalClaim(BaseRidableAnimal animal, BasePlayer player)
{
    Puts("OnRidableAnimalClaim works!");
    return null;
}
```
