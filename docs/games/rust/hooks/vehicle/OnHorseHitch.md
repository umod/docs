---
hide_table_of_contents: true
---

# OnHorseHitch

## Usage

* Called just before setting the hitch
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnHorseHitch(RidableHorse horse, HitchTrough hitch)
{
    Puts("OnHorseHitch works!");
    return null;
}
```
