---
hide_table_of_contents: true
---

# OnHorseHitch

## Usage

* Called just before setting the hitch
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHorseHitch(RidableHorse horse, HitchTrough hitch)
{
    Puts("OnHorseHitch works!");
    return null;
}
```
