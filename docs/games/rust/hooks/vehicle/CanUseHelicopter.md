---
hide_table_of_contents: true
---

# CanUseHelicopter

## Usage

* Useful for denying to mount a CH47 helicopter
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object CanUseHelicopter(BasePlayer player, CH47HelicopterAIController helicopter)
{
    Puts("CanUseHelicopter works!");
    return null;
}
```
