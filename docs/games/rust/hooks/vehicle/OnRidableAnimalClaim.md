---
hide_table_of_contents: true
---

# OnRidableAnimalClaim

## Usage

* Called when a player tries to claim a horse
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnRidableAnimalClaim(BaseRidableAnimal animal, BasePlayer player)
{
    Puts("OnRidableAnimalClaim works!");
    return null;
}
```
