---
hide_table_of_contents: true
---

# OnExplosiveDud

## Usage

* Called when explosive tries to become dud
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnExplosiveDud(DudTimedExplosive explosive)
{
    Puts("OnExplosiveDud works!");
    return null;
}
```
