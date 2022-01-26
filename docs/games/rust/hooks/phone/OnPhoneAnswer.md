---
hide_table_of_contents: true
---

# OnPhoneAnswer

## Usage

* Called when a player tries to answer a phone call
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPhoneAnswer(PhoneController receiverPhone, PhoneController callerPhone)
{
    Puts("OnPhoneAnswer works!");
    return null;
}
```
